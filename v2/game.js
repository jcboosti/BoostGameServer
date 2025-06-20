class TikFinityOverlayScene extends Phaser.Scene {
    constructor() {
        super('TikFinityOverlayScene');
        this.ws = null;
        this.eventLog = []; // To store recent event texts
        this.maxLogEntries = 7; // Max events to show on screen
        this.logSpacing = 35; // Spacing between log entries
        this.baseYPosition = 50; // Starting Y position for logs
        this.particleEmitter = null;
    }

    preload() {
        // Optional: Load a particle image if you want visual effects for gifts/likes
        this.load.image('particle', 'assets/particle.png'); // Make sure you have this file
    }

    create() {
        this.cameras.main.setBackgroundColor('rgba(0,0,0,0)'); // Transparent background

        // Instructions text (optional)
        this.add.text(10, 10, 'TikFinity Overlay Active. Waiting for events...', {
            fontSize: '16px',
            fill: '#cccccc'
        }).setOrigin(0,0);

        // Create a particle emitter (optional)
        if (this.textures.exists('particle')) {
            this.particleEmitter = this.add.particles(0, 0, 'particle', {
                speed: { min: 50, max: 200 },
                angle: { min: 240, max: 300 },
                scale: { start: 0.8, end: 0 },
                lifespan: { min: 300, max: 1000 },
                blendMode: 'ADD',
                frequency: -1, // Emit only on demand
                gravityY: 300
            });
        }


        this.connectWebSocket();
    }

    connectWebSocket() {
        const websocketUrl = 'ws://localhost:21213';
        console.log(`Attempting to connect to WebSocket: ${websocketUrl}`);
        this.ws = new WebSocket(websocketUrl);

        this.ws.onopen = () => {
            console.log('Connected to TikFinity WebSocket!');
            this.addEventToLog('System: Connected to TikFinity!', '#00ff00');
        };

        this.ws.onmessage = (event) => {
            try {
                const messageData = JSON.parse(event.data);
                console.log('Received TikFinity Event:', messageData);
                this.handleTikFinityEvent(messageData);
            } catch (e) {
                console.error('Error parsing WebSocket message:', e);
                this.addEventToLog(`System Error: Could not parse message.`, '#ff0000');
            }
        };

        this.ws.onerror = (error) => {
            console.error('WebSocket Error:', error);
            this.addEventToLog('System Error: WebSocket connection error.', '#ff0000');
        };

        this.ws.onclose = () => {
            console.log('Disconnected from TikFinity WebSocket.');
            this.addEventToLog('System: Disconnected. Attempting to reconnect...', '#ffff00');
            // Optional: implement reconnection logic
            setTimeout(() => this.connectWebSocket(), 5000); // Reconnect after 5 seconds
        };
    }

    handleTikFinityEvent(eventData) {
        // TikFinity sometimes uses "type" and sometimes "eventName"
        const eventType = eventData.type || eventData.eventName || eventData.event;
        const data = eventData.data || {}; // Ensure data object exists

        let displayText = `Event: ${eventType}`;
        let eventColor = '#ffffff'; // Default white
        let triggerParticles = false;
        let particleX = this.game.config.width / 2; // Default particle origin
        let particleY = this.game.config.height / 2;

        const user = data.uniqueId || data.nickname || 'Someone';

        switch (eventType) {
            case 'like':
                displayText = `❤️ ${user} liked! (+${data.likeCount || 1})`;
                eventColor = '#ff69b4'; // Pink
                triggerParticles = true;
                particleX = Phaser.Math.Between(100, Number(this.game.config.width) - 100);
                particleY = Number(this.game.config.height) - 50;
                break;
            case 'gift':
                displayText = `🎁 ${user} sent ${data.giftName || 'a gift'} (x${data.repeatCount || 1})`;
                eventColor = '#ffd700'; // Gold
                triggerParticles = true;
                particleX = Phaser.Math.Between(100, Number(this.game.config.width) - 100);
                particleY = Phaser.Math.Between(100, Number(this.game.config.height) - 100);
                break;
            case 'comment':
                displayText = `💬 ${user}: ${data.comment}`;
                eventColor = '#87ceeb'; // Sky Blue
                break;
            case 'follow':
                displayText = `👋 ${user} followed!`;
                eventColor = '#90ee90'; // Light Green
                break;
            case 'share':
                displayText = `🔗 ${user} shared the stream!`;
                eventColor = '#ffa500'; // Orange
                break;
            case 'join': // This can be very spammy, use with caution
                // displayText = `➡️ ${user} joined!`;
                // eventColor = '#add8e6'; // Light Blue
                // To avoid spam, let's not display joins by default or make them less prominent
                console.log(`Join event from ${user} - not displaying on overlay to reduce spam.`);
                return; // Exit early for joins
            default:
                displayText = `🔔 Event: ${eventType} from ${user}`;
                eventColor = '#dddddd';
        }

        this.addEventToLog(displayText, eventColor);

        if (triggerParticles && this.particleEmitter) {
            this.particleEmitter.emitParticleAt(particleX, particleY, Phaser.Math.Between(10, 30));
        }
    }

    addEventToLog(text, color = '#ffffff') {
        // Remove oldest entry if log is full
        if (this.eventLog.length >= this.maxLogEntries) {
            const oldestEntry = this.eventLog.shift(); // Remove from beginning of array
            if (oldestEntry.phaserText) {
                oldestEntry.phaserText.destroy();
            }
        }

        // Create new text object
        const newText = this.add.text(50, this.baseYPosition, text, {
            fontSize: '24px',
            fill: color,
            stroke: '#000000',
            strokeThickness: 4,
            wordWrap: { width: Number(this.game.config.width) - 100 } // Wrap text
        });
        newText.setAlpha(0); // Start invisible for fade-in

        // Add to our log
        this.eventLog.push({ text: text, phaserText: newText, color: color });

        // Reposition existing logs and animate new one
        this.updateLogPositions();
    }

    updateLogPositions() {
        this.eventLog.forEach((entry, index) => {
            if (entry.phaserText && entry.phaserText.active) {
                const targetY = this.baseYPosition + (index * this.logSpacing);
                
                // If it's the newest entry (last in array), fade it in
                if (index === this.eventLog.length - 1 && entry.phaserText.alpha === 0) {
                    this.tweens.add({
                        targets: entry.phaserText,
                        y: targetY,
                        alpha: 1,
                        duration: 300,
                        ease: 'Power2'
                    });
                } else { // Otherwise, just move it
                    this.tweens.add({
                        targets: entry.phaserText,
                        y: targetY,
                        duration: 200,
                        ease: 'Sine.easeInOut'
                    });
                }
            }
        });

        // Optional: Fade out and destroy very old text objects that are no longer in visible log
        // This is handled by shifting from the array, but if you have persistent effects, manage them here.
    }

    // update(time, delta) {
        // Game loop, not strictly needed for this POC if animations are self-contained
    // }
}

const config = {
    type: Phaser.AUTO, // Or Phaser.WEBGL / Phaser.CANVAS
    parent: 'phaser-game', // ID of the div to inject the canvas
    width: 800, // Match your CSS or desired overlay size
    height: 600,
    transparent: true, // Important for Phaser 3+, Phaser 4 handles this via scene backgroundColor
    scene: [TikFinityOverlayScene],
    // physics: { // Not needed for this POC
    //     default: 'arcade',
    //     arcade: {
    //         gravity: { y: 0 }
    //     }
    // }
};

const game = new Phaser.Game(config);
