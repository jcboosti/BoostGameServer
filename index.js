// TikTok Gift Webhook – Node.js endpoint (Express + ngrok + dotenv)
// Dynamic‑import version (CommonJS friendly)
// --------------------------------------------------
// Example .env :
//   NGROK_AUTHTOKEN=<your-token>
//   # Paid custom domain you’ve mapped in your ngrok dashboard / DNS :
//   NGROK_DOMAIN=d.codemonkey.games   # <- CNAME to xxx.ngrok.io
//   # —OR— reserve a free sub‑domain :
//   # NGROK_SUBDOMAIN=codemonkey
//   DISCORD_WEBHOOK_URL=<optional>
//   PORT=3000
//   NGROK_REGION=us
// --------------------------------------------------

;(async () => {
  /*  Load environment variables  */
  const { config } = await import('dotenv');
  config();

  /*  Import deps  */
  const [
    { default: express },
    { default: cors },
    { default: fetch },
    { default: ngrok }
  ] = await Promise.all([
    import('express'),
    import('cors'),
    import('node-fetch'),
    import('ngrok')
  ]);

  /*  Express  */
  const app  = express();
  const PORT = process.env.PORT || 3000;
  app.use(express.json());
  app.use(cors());

  app.get('/', (_req,res)=>res.send('✅ TikTok Gift Webhook running'));

  app.post('/gift', async (req,res)=>{
    const { event, streamer, timestamp } = req.body || {};
    console.log(`[Gift] ${event} from ${streamer} @ ${new Date(timestamp).toISOString()}`);

    if (process.env.DISCORD_WEBHOOK_URL){
      try{
        await fetch(process.env.DISCORD_WEBHOOK_URL,{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({content:`🎁 **Gift button clicked!** from **${streamer||'unknown'}**`})
        });
      }catch(err){
        console.error('⚠️  Discord forward failed:',err);
      }
    }
    res.json({status:'ok'});
  });

  /*  Launch server + ngrok  */
  app.listen(PORT, async()=>{
    console.log(`🚀 Gift webhook listening on http://localhost:${PORT}`);

    try{
      const connectOpts = {
        addr: PORT,
        authtoken: process.env.NGROK_AUTHTOKEN,
        region: process.env.NGROK_REGION || 'us',
        proto: 'http'
      };

      if (process.env.NGROK_DOMAIN){
        // For custom paid domain you configured in ngrok dashboard
        connectOpts.hostname = process.env.NGROK_DOMAIN; // <- key change!
      } else if (process.env.NGROK_SUBDOMAIN){
        connectOpts.subdomain = process.env.NGROK_SUBDOMAIN;
      }

      const url = await ngrok.connect(connectOpts);
      console.log(`🌐 Public URL: ${url}`);
      console.log(`👉 Use ${url}/gift as webhookUrl in gift-overlay.html`);
    }catch(err){
      console.error('⚠️  ngrok failed to start:',err);
    }
  });

  /*  Graceful shutdown  */
  process.on('SIGINT', async()=>{
    console.log('\n⏹  Shutting down...');
    await ngrok.disconnect();
    await ngrok.kill();
    process.exit(0);
  });
})();
