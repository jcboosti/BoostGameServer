tikfinity event handler, passes wss messages to phaser web game

# Getting Started

in terminal run
`npm run start`


# Events
```javascript
// Example for a "like" event
{
  "type": "like", // Or sometimes "eventName": "like"
  "data": {
    "uniqueId": "username123", // TikTok username
    "nickname": "User Name",
    "profilePictureUrl": "url_to_avatar.jpg",
    "likeCount": 1 // Or total likes for this burst
    // ... other properties
  }
}

// Example for a "gift" event
{
  "type": "gift",
  "data": {
    "uniqueId": "gifter_username",
    "nickname": "Gifter Name",
    "giftId": 123,
    "giftName": "Rose",
    "giftPictureUrl": "url_to_gift_icon.png",
    "repeatCount": 1, // How many of this gift in this event
    "repeatEnd": 0, // 1 if it's the end of a streak
    "diamondCount": 1 // Value of the gift
    // ... other properties
  }
}

// Example for a "comment" event
{
  "type": "comment",
  "data": {
    "uniqueId": "commenter_username",
    "nickname": "Commenter Name",
    "comment": "Hello world!"
    // ... other properties
  }
}
```