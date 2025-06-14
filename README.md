tikfinity event handler, passes wss messages to phaser web game

# Getting Started

in terminal run
`npm run start`


# Events

<!-- "chat" event -->
```javascript
{
    "event": "chat",
    "data": {
        "emotes": [],
        "comment": "No lets go",
        "userId": "6773316529204478981",
        "secUid": "MS4wLjABAAAA4HWezq43iy7x6ZjGcEpM9TZ3Ve24O28yP1vXtzWxJcOf4jH7RsOi7zacF6pDW8YY",
        "uniqueId": "youtube911_yt_offical",
        "nickname": "youtube911_yt_",
        "profilePictureUrl": "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/d1ace031645def528e6f37e0fa660b9c~tplv-tiktokx-cropcenter:100:100.webp?dr=9640&refresh_token=38697871&x-expires=1750032000&x-signature=Kdf1RnThPxpeu0UO7hpdfZNMzgk%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=fdd36af4&idc=useast5",
        "followRole": 0,
        "userBadges": [
            {
                "type": "privilege",
                "privilegeId": "7138381861675374372",
                "level": 23,
                "badgeSceneType": 8
            }
        ],
        "userSceneTypes": [
            8
        ],
        "userDetails": {
            "createTime": "0",
            "bioDescription": "",
            "profilePictureUrls": [
                "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/d1ace031645def528e6f37e0fa660b9c~tplv-tiktokx-cropcenter:100:100.webp?dr=9640&refresh_token=38697871&x-expires=1750032000&x-signature=Kdf1RnThPxpeu0UO7hpdfZNMzgk%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=fdd36af4&idc=useast5",
                "https://p19-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/d1ace031645def528e6f37e0fa660b9c~tplv-tiktokx-cropcenter:100:100.webp?dr=9640&refresh_token=da735d23&x-expires=1750032000&x-signature=aa9rAPG%2FwHvoA3DfRfyuUBs1%2Fv4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=fdd36af4&idc=useast5",
                "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/d1ace031645def528e6f37e0fa660b9c~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=ace6f2b9&x-expires=1750032000&x-signature=5K9vD6BsXxy9qQps4S8JUqdRAvY%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=fdd36af4&idc=useast5"
            ]
        },
        "followInfo": {
            "followingCount": 111,
            "followerCount": 940,
            "followStatus": 0,
            "pushStatus": 0
        },
        "isModerator": false,
        "isNewGifter": false,
        "isSubscriber": false,
        "topGifterRank": 0,
        "gifterLevel": 23,
        "teamMemberLevel": 0,
        "msgId": "7515589486609222446",
        "createTime": "1749859543679",
        "tikfinityUserId": 1888822,
        "tikfinityUsername": "wizardofdealz"
    }
}
```



<!-- "config" event -->
```javascript
{
    "event": "config",
    "data": {
        "events": [
            {
                "type": "soundalert",
                "enabled": true,
                "trigger": {
                    "type": "follow"
                },
                "actions": [
                    {
                        "type": "sound",
                        "name": "thanks follow"
                    }
                ]
            },
            {
                "type": "soundalert",
                "enabled": true,
                "trigger": {
                    "type": "gift",
                    "id": 5655,
                    "name": "Rose",
                    "coins": 1,
                    "imageUrl": "https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/eba3a9bb85c33e017f3648eaf88d7189~tplv-obj.webp"
                },
                "actions": [
                    {
                        "type": "sound",
                        "name": "Anime Wow"
                    }
                ]
            },
            {
                "type": "event",
                "enabled": true,
                "trigger": {
                    "type": "subscribe",
                    "availableFor": "any"
                },
                "actions": [
                    {
                        "type": "action",
                        "name": "Sub Alert"
                    }
                ]
            },
            {
                "type": "event",
                "enabled": true,
                "trigger": {
                    "type": "likes",
                    "availableFor": "any",
                    "minLikesAmount": 100
                },
                "actions": [
                    {
                        "type": "action",
                        "name": "Like Alert"
                    }
                ]
            },
            {
                "type": "event",
                "enabled": true,
                "trigger": {
                    "type": "min_coins",
                    "availableFor": "any",
                    "minCoinsValue": 1
                },
                "actions": [
                    {
                        "type": "action",
                        "name": "Gift Alert"
                    }
                ]
            },
            {
                "type": "event",
                "enabled": true,
                "trigger": {
                    "type": "follow",
                    "availableFor": "any"
                },
                "actions": [
                    {
                        "type": "action",
                        "name": "Follow Alert"
                    }
                ]
            }
        ]
    }
}






```



<!-- Example for a "gift" event -->
```javascript
{
    "event": "gift",
    "data": {
        "giftId": 5655,
        "repeatCount": 1,
        "groupId": "1749859560141",
        "userId": "7350695922194564138",
        "secUid": "MS4wLjABAAAAOJ3NNwwqIveJgXHqq-r0Y3TDkY0LIdL1Igvbweh0uMfn3fmUc9llU62vNQwFL-EL",
        "uniqueId": "jordysdiscountshow",
        "nickname": "letstalkshop",
        "profilePictureUrl": "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/6f8f99e793cd44cabb16cba615f751f0~tplv-tiktokx-cropcenter:100:100.webp?dr=9640&refresh_token=911058ec&x-expires=1750032000&x-signature=I8kF3Ef7ihmnyiPTV2WvyImZzUw%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=fdd36af4&idc=useast8",
        "followRole": 0,
        "userBadges": [
            {
                "type": "image",
                "badgeSceneType": 6,
                "displayType": 1,
                "url": "https://p19-webcast.tiktokcdn.com/webcast-sg/new_top_gifter_version_2.png~tplv-obj.image"
            },
            {
                "type": "privilege",
                "privilegeId": "7138381861675341604",
                "level": 21,
                "badgeSceneType": 8
            }
        ],
        "userSceneTypes": [
            6,
            8,
            6
        ],
        "userDetails": {
            "createTime": "0",
            "bioDescription": "",
            "profilePictureUrls": [
                "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/6f8f99e793cd44cabb16cba615f751f0~tplv-tiktokx-cropcenter:100:100.webp?dr=9640&refresh_token=911058ec&x-expires=1750032000&x-signature=I8kF3Ef7ihmnyiPTV2WvyImZzUw%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=fdd36af4&idc=useast8",
                "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/6f8f99e793cd44cabb16cba615f751f0~tplv-tiktokx-cropcenter:100:100.webp?dr=9640&refresh_token=1591724d&x-expires=1750032000&x-signature=ifvHfbXRRoaltIHCxyPDy6mucmg%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=fdd36af4&idc=useast8",
                "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/6f8f99e793cd44cabb16cba615f751f0~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=41630b35&x-expires=1750032000&x-signature=MLf4ElhpaFu5u66w%2FExwX91bydQ%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=fdd36af4&idc=useast8"
            ]
        },
        "followInfo": {
            "followingCount": 289,
            "followerCount": 6245,
            "followStatus": 0,
            "pushStatus": 0
        },
        "isModerator": false,
        "isNewGifter": false,
        "isSubscriber": false,
        "topGifterRank": 1,
        "gifterLevel": 21,
        "teamMemberLevel": 0,
        "msgId": "7515589580092050207",
        "createTime": "1749859560559",
        "displayType": "webcast_aweme_gift_send_messageNew",
        "label": "{0:user} sent {1:gift} × {2:string}",
        "repeatEnd": false,
        "gift": {
            "gift_id": 5655,
            "repeat_count": 1,
            "repeat_end": 0,
            "gift_type": 1
        },
        "describe": "sent Rose",
        "giftType": 1,
        "diamondCount": 1,
        "giftName": "Rose",
        "giftPictureUrl": "https://p19-webcast.tiktokcdn.com/img/maliva/webcast-va/eba3a9bb85c33e017f3648eaf88d7189~tplv-obj.png",
        "timestamp": 1749859560560,
        "receiverUserId": "6983923605470856197",
        "originalName": "Rose",
        "originalDescribe": "Sent Rose",
        "tikfinityUserId": 1888822,
        "tikfinityUsername": "wizardofdealz"
    }
}


{
    "event": "gift",
    "data": {
        "giftId": 15585,
        "repeatCount": 1,
        "groupId": "1749859539512",
        "userId": "7350695922194564138",
        "secUid": "MS4wLjABAAAAOJ3NNwwqIveJgXHqq-r0Y3TDkY0LIdL1Igvbweh0uMfn3fmUc9llU62vNQwFL-EL",
        "uniqueId": "jordysdiscountshow",
        "nickname": "letstalkshop",
        "profilePictureUrl": "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/6f8f99e793cd44cabb16cba615f751f0~tplv-tiktokx-cropcenter:100:100.webp?dr=9640&refresh_token=911058ec&x-expires=1750032000&x-signature=I8kF3Ef7ihmnyiPTV2WvyImZzUw%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=fdd36af4&idc=useast8",
        "followRole": 0,
        "userBadges": [
            {
                "type": "privilege",
                "privilegeId": "7138381861675341604",
                "level": 21,
                "badgeSceneType": 8
            }
        ],
        "userSceneTypes": [
            8
        ],
        "userDetails": {
            "createTime": "0",
            "bioDescription": "",
            "profilePictureUrls": [
                "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/6f8f99e793cd44cabb16cba615f751f0~tplv-tiktokx-cropcenter:100:100.webp?dr=9640&refresh_token=911058ec&x-expires=1750032000&x-signature=I8kF3Ef7ihmnyiPTV2WvyImZzUw%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=fdd36af4&idc=useast8",
                "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/6f8f99e793cd44cabb16cba615f751f0~tplv-tiktokx-cropcenter:100:100.webp?dr=9640&refresh_token=1591724d&x-expires=1750032000&x-signature=ifvHfbXRRoaltIHCxyPDy6mucmg%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=fdd36af4&idc=useast8",
                "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/6f8f99e793cd44cabb16cba615f751f0~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=41630b35&x-expires=1750032000&x-signature=MLf4ElhpaFu5u66w%2FExwX91bydQ%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=fdd36af4&idc=useast8"
            ]
        },
        "followInfo": {
            "followingCount": 289,
            "followerCount": 6245,
            "followStatus": 0,
            "pushStatus": 0
        },
        "isModerator": false,
        "isNewGifter": false,
        "isSubscriber": false,
        "topGifterRank": 0,
        "gifterLevel": 21,
        "teamMemberLevel": 0,
        "msgId": "7515589491256642335",
        "createTime": "1749859539880",
        "displayType": "webcast_aweme_gift_send_messageNew",
        "label": "{0:user} sent {1:gift} × {2:string}",
        "repeatEnd": false,
        "gift": {
            "gift_id": 15585,
            "repeat_count": 1,
            "repeat_end": 0,
            "gift_type": 2
        },
        "describe": "sent Rainbow Ministar",
        "giftType": 2,
        "diamondCount": 100,
        "giftName": "Rainbow Ministar",
        "giftPictureUrl": "https://p19-webcast.tiktokcdn.com/img/alisg/webcast-sg/resource/7f0f2e34134a1b151cd24c5702264f75.png~tplv-obj.png",
        "timestamp": 1749859539882,
        "receiverUserId": "6983923605470856197",
        "originalName": "Rainbow Ministar",
        "originalDescribe": "Sent Rainbow Ministar",
        "tikfinityUserId": 1888822,
        "tikfinityUsername": "wizardofdealz"
    }
}
```



<!-- Example for a "like" event -->
```javascript
{
    "event": "like",
    "data": {
        "likeCount": 3,
        "totalLikeCount": 520,
        "userId": "7512006564394845230",
        "secUid": "MS4wLjABAAAAhsjTE89g4CU3l-vb07sAGtULcfRdg6XRz4eZu_Dh0kBA_vPrbXjMsz0h3cgDgC7D",
        "uniqueId": "christineellis51",
        "nickname": "Christine Ellis",
        "profilePictureUrl": "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/de9bb16f0517432e283cdf11011a93fa~tplv-tiktokx-cropcenter:100:100.webp?dr=9640&refresh_token=b6a1642b&x-expires=1750032000&x-signature=0wJ95Dh9aESK0GIt83I2RDT72w8%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=fdd36af4&idc=useast8",
        "followRole": 1,
        "userBadges": [
            {
                "type": "image",
                "badgeSceneType": 6,
                "displayType": 1,
                "url": "https://p19-webcast.tiktokcdn.com/webcast-sg/new_top_gifter_version_2.png~tplv-obj.image"
            }
        ],
        "userSceneTypes": [
            6,
            6
        ],
        "userDetails": {
            "createTime": "0",
            "bioDescription": "",
            "profilePictureUrls": [
                "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/de9bb16f0517432e283cdf11011a93fa~tplv-tiktokx-cropcenter:100:100.webp?dr=9640&refresh_token=b6a1642b&x-expires=1750032000&x-signature=0wJ95Dh9aESK0GIt83I2RDT72w8%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=fdd36af4&idc=useast8",
                "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/de9bb16f0517432e283cdf11011a93fa~tplv-tiktokx-cropcenter:100:100.webp?dr=9640&refresh_token=4f7a589c&x-expires=1750032000&x-signature=4tN6mIyxWWdg1LJeQK%2BsnvCX488%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=fdd36af4&idc=useast8",
                "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/de9bb16f0517432e283cdf11011a93fa~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=0ea81d5e&x-expires=1750032000&x-signature=C%2Bk4x%2FDlq0FQ7YsZrVqD%2FMkOlbg%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=fdd36af4&idc=useast8"
            ]
        },
        "followInfo": {
            "followingCount": 1,
            "followerCount": 0,
            "followStatus": 1,
            "pushStatus": 0
        },
        "isModerator": false,
        "isNewGifter": false,
        "isSubscriber": false,
        "topGifterRank": 1,
        "gifterLevel": 0,
        "teamMemberLevel": 0,
        "msgId": "7515588820285277214",
        "createTime": "1749859382884",
        "displayType": "pm_mt_msg_viewer",
        "label": "{0:user} liked the LIVE",
        "tikfinityUserId": 1888822,
        "tikfinityUsername": "wizardofdealz"
    }
}
```



<!-- member event -->
```javascript

{
    "event": "member",
    "data": {
        "actionId": 1,
        "userId": "6773316529204478981",
        "secUid": "MS4wLjABAAAA4HWezq43iy7x6ZjGcEpM9TZ3Ve24O28yP1vXtzWxJcOf4jH7RsOi7zacF6pDW8YY",
        "uniqueId": "youtube911_yt_offical",
        "nickname": "youtube911_yt_",
        "profilePictureUrl": "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/d1ace031645def528e6f37e0fa660b9c~tplv-tiktokx-cropcenter:100:100.webp?dr=9640&refresh_token=38697871&x-expires=1750032000&x-signature=Kdf1RnThPxpeu0UO7hpdfZNMzgk%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=fdd36af4&idc=useast5",
        "followRole": 0,
        "userBadges": [
            {
                "type": "privilege",
                "privilegeId": "7138381861675374372",
                "level": 23,
                "badgeSceneType": 8
            }
        ],
        "userSceneTypes": [
            8
        ],
        "userDetails": {
            "createTime": "0",
            "bioDescription": "",
            "profilePictureUrls": [
                "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/d1ace031645def528e6f37e0fa660b9c~tplv-tiktokx-cropcenter:100:100.webp?dr=9640&refresh_token=38697871&x-expires=1750032000&x-signature=Kdf1RnThPxpeu0UO7hpdfZNMzgk%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=fdd36af4&idc=useast5",
                "https://p19-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/d1ace031645def528e6f37e0fa660b9c~tplv-tiktokx-cropcenter:100:100.webp?dr=9640&refresh_token=da735d23&x-expires=1750032000&x-signature=aa9rAPG%2FwHvoA3DfRfyuUBs1%2Fv4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=fdd36af4&idc=useast5",
                "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/d1ace031645def528e6f37e0fa660b9c~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=ace6f2b9&x-expires=1750032000&x-signature=5K9vD6BsXxy9qQps4S8JUqdRAvY%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=fdd36af4&idc=useast5"
            ]
        },
        "followInfo": {
            "followingCount": 111,
            "followerCount": 940,
            "followStatus": 0,
            "pushStatus": 0
        },
        "isModerator": false,
        "isNewGifter": false,
        "isSubscriber": false,
        "topGifterRank": 0,
        "gifterLevel": 23,
        "teamMemberLevel": 0,
        "msgId": "7515589435569605422",
        "createTime": "1749859535246",
        "displayType": "live_room_enter_toast",
        "label": "{0:user} joined",
        "tikfinityUserId": 1888822,
        "tikfinityUsername": "wizardofdealz"
    }
}
```



<!-- "roomUser" event -->
```javascript 
{
    "event": "roomUser",
    "data": {
        "topViewers": [
            {
                "user": {
                    "userId": "7512006564394845230",
                    "secUid": "MS4wLjABAAAAhsjTE89g4CU3l-vb07sAGtULcfRdg6XRz4eZu_Dh0kBA_vPrbXjMsz0h3cgDgC7D",
                    "uniqueId": "christineellis51",
                    "nickname": "Christine Ellis",
                    "profilePictureUrl": "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/de9bb16f0517432e283cdf11011a93fa~tplv-tiktokx-cropcenter:100:100.webp?dr=9640&refresh_token=4f7a589c&x-expires=1750032000&x-signature=4tN6mIyxWWdg1LJeQK%2BsnvCX488%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=1e19605b&idc=useast5",
                    "userBadges": [],
                    "userSceneTypes": [],
                    "userDetails": {
                        "createTime": "0",
                        "bioDescription": "",
                        "profilePictureUrls": [
                            "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/de9bb16f0517432e283cdf11011a93fa~tplv-tiktokx-cropcenter:100:100.webp?dr=9640&refresh_token=4f7a589c&x-expires=1750032000&x-signature=4tN6mIyxWWdg1LJeQK%2BsnvCX488%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=1e19605b&idc=useast5",
                            "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/de9bb16f0517432e283cdf11011a93fa~tplv-tiktokx-cropcenter:100:100.webp?dr=9640&refresh_token=b6a1642b&x-expires=1750032000&x-signature=0wJ95Dh9aESK0GIt83I2RDT72w8%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=1e19605b&idc=useast5",
                            "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/de9bb16f0517432e283cdf11011a93fa~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=50833bcc&x-expires=1750032000&x-signature=O5ywQUD2g0g0SP7Jhmq1EeSMWds%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=1e19605b&idc=useast5"
                        ]
                    },
                    "isModerator": false,
                    "isNewGifter": false,
                    "isSubscriber": false,
                    "topGifterRank": null,
                    "gifterLevel": 0,
                    "teamMemberLevel": 0
                },
                "coinCount": 3
            },
            {
                "user": {
                    "userId": "6773316529204478981",
                    "secUid": "MS4wLjABAAAA4HWezq43iy7x6ZjGcEpM9TZ3Ve24O28yP1vXtzWxJcOf4jH7RsOi7zacF6pDW8YY",
                    "uniqueId": "youtube911_yt_offical",
                    "nickname": "youtube911_yt_",
                    "profilePictureUrl": "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/d1ace031645def528e6f37e0fa660b9c~tplv-tiktokx-cropcenter:100:100.webp?dr=9640&refresh_token=38697871&x-expires=1750032000&x-signature=Kdf1RnThPxpeu0UO7hpdfZNMzgk%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=1e19605b&idc=useast5",
                    "userBadges": [],
                    "userSceneTypes": [],
                    "userDetails": {
                        "createTime": "0",
                        "bioDescription": "",
                        "profilePictureUrls": [
                            "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/d1ace031645def528e6f37e0fa660b9c~tplv-tiktokx-cropcenter:100:100.webp?dr=9640&refresh_token=38697871&x-expires=1750032000&x-signature=Kdf1RnThPxpeu0UO7hpdfZNMzgk%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=1e19605b&idc=useast5",
                            "https://p19-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/d1ace031645def528e6f37e0fa660b9c~tplv-tiktokx-cropcenter:100:100.webp?dr=9640&refresh_token=da735d23&x-expires=1750032000&x-signature=aa9rAPG%2FwHvoA3DfRfyuUBs1%2Fv4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=1e19605b&idc=useast5",
                            "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/d1ace031645def528e6f37e0fa660b9c~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=ace6f2b9&x-expires=1750032000&x-signature=5K9vD6BsXxy9qQps4S8JUqdRAvY%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=1e19605b&idc=useast5"
                        ]
                    },
                    "isModerator": false,
                    "isNewGifter": false,
                    "isSubscriber": false,
                    "topGifterRank": null,
                    "gifterLevel": 0,
                    "teamMemberLevel": 0
                },
                "coinCount": 0
            }
        ],
        "viewerCount": 2,
        "topGifterRank": 0,
        "tikfinityUserId": 1888822,
        "tikfinityUsername": "wizardofdealz"
    }
}


{
    "event": "roomUser",
    "data": {
        "topViewers": [
            {
                "user": {
                    "userId": "7350695922194564138",
                    "secUid": "MS4wLjABAAAAOJ3NNwwqIveJgXHqq-r0Y3TDkY0LIdL1Igvbweh0uMfn3fmUc9llU62vNQwFL-EL",
                    "uniqueId": "jordysdiscountshow",
                    "nickname": "letstalkshop",
                    "profilePictureUrl": "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/6f8f99e793cd44cabb16cba615f751f0~tplv-tiktokx-cropcenter:100:100.webp?dr=9640&refresh_token=1591724d&x-expires=1750032000&x-signature=ifvHfbXRRoaltIHCxyPDy6mucmg%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=1e19605b&idc=useast5",
                    "userBadges": [],
                    "userSceneTypes": [],
                    "userDetails": {
                        "createTime": "0",
                        "bioDescription": "",
                        "profilePictureUrls": [
                            "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/6f8f99e793cd44cabb16cba615f751f0~tplv-tiktokx-cropcenter:100:100.webp?dr=9640&refresh_token=1591724d&x-expires=1750032000&x-signature=ifvHfbXRRoaltIHCxyPDy6mucmg%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=1e19605b&idc=useast5",
                            "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/6f8f99e793cd44cabb16cba615f751f0~tplv-tiktokx-cropcenter:100:100.webp?dr=9640&refresh_token=911058ec&x-expires=1750032000&x-signature=I8kF3Ef7ihmnyiPTV2WvyImZzUw%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=1e19605b&idc=useast5",
                            "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/6f8f99e793cd44cabb16cba615f751f0~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=82577c16&x-expires=1750032000&x-signature=94i0kCyw9ip9Q7Z07u%2Fna6fJp3M%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=1e19605b&idc=useast5"
                        ]
                    },
                    "isModerator": false,
                    "isNewGifter": false,
                    "isSubscriber": false,
                    "topGifterRank": null,
                    "gifterLevel": 0,
                    "teamMemberLevel": 0
                },
                "coinCount": 481
            },
            {
                "user": {
                    "userId": "6773316529204478981",
                    "secUid": "MS4wLjABAAAA4HWezq43iy7x6ZjGcEpM9TZ3Ve24O28yP1vXtzWxJcOf4jH7RsOi7zacF6pDW8YY",
                    "uniqueId": "youtube911_yt_offical",
                    "nickname": "youtube911_yt_",
                    "profilePictureUrl": "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/d1ace031645def528e6f37e0fa660b9c~tplv-tiktokx-cropcenter:100:100.webp?dr=9640&refresh_token=38697871&x-expires=1750032000&x-signature=Kdf1RnThPxpeu0UO7hpdfZNMzgk%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=1e19605b&idc=useast5",
                    "userBadges": [],
                    "userSceneTypes": [],
                    "userDetails": {
                        "createTime": "0",
                        "bioDescription": "",
                        "profilePictureUrls": [
                            "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/d1ace031645def528e6f37e0fa660b9c~tplv-tiktokx-cropcenter:100:100.webp?dr=9640&refresh_token=38697871&x-expires=1750032000&x-signature=Kdf1RnThPxpeu0UO7hpdfZNMzgk%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=1e19605b&idc=useast5",
                            "https://p19-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/d1ace031645def528e6f37e0fa660b9c~tplv-tiktokx-cropcenter:100:100.webp?dr=9640&refresh_token=da735d23&x-expires=1750032000&x-signature=aa9rAPG%2FwHvoA3DfRfyuUBs1%2Fv4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=1e19605b&idc=useast5",
                            "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/d1ace031645def528e6f37e0fa660b9c~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=ace6f2b9&x-expires=1750032000&x-signature=5K9vD6BsXxy9qQps4S8JUqdRAvY%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=1e19605b&idc=useast5"
                        ]
                    },
                    "isModerator": false,
                    "isNewGifter": false,
                    "isSubscriber": false,
                    "topGifterRank": null,
                    "gifterLevel": 0,
                    "teamMemberLevel": 0
                },
                "coinCount": 5
            },
            {
                "user": {
                    "userId": "7512006564394845230",
                    "secUid": "MS4wLjABAAAAhsjTE89g4CU3l-vb07sAGtULcfRdg6XRz4eZu_Dh0kBA_vPrbXjMsz0h3cgDgC7D",
                    "uniqueId": "christineellis51",
                    "nickname": "Christine Ellis",
                    "profilePictureUrl": "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/de9bb16f0517432e283cdf11011a93fa~tplv-tiktokx-cropcenter:100:100.webp?dr=9640&refresh_token=b6a1642b&x-expires=1750032000&x-signature=0wJ95Dh9aESK0GIt83I2RDT72w8%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=1e19605b&idc=useast5",
                    "userBadges": [],
                    "userSceneTypes": [],
                    "userDetails": {
                        "createTime": "0",
                        "bioDescription": "",
                        "profilePictureUrls": [
                            "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/de9bb16f0517432e283cdf11011a93fa~tplv-tiktokx-cropcenter:100:100.webp?dr=9640&refresh_token=b6a1642b&x-expires=1750032000&x-signature=0wJ95Dh9aESK0GIt83I2RDT72w8%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=1e19605b&idc=useast5",
                            "https://p19-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/de9bb16f0517432e283cdf11011a93fa~tplv-tiktokx-cropcenter:100:100.webp?dr=9640&refresh_token=4f7a589c&x-expires=1750032000&x-signature=4tN6mIyxWWdg1LJeQK%2BsnvCX488%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=1e19605b&idc=useast5",
                            "https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/de9bb16f0517432e283cdf11011a93fa~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=0ea81d5e&x-expires=1750032000&x-signature=C%2Bk4x%2FDlq0FQ7YsZrVqD%2FMkOlbg%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=1e19605b&idc=useast5"
                        ]
                    },
                    "isModerator": false,
                    "isNewGifter": false,
                    "isSubscriber": false,
                    "topGifterRank": null,
                    "gifterLevel": 0,
                    "teamMemberLevel": 0
                },
                "coinCount": 3
            }
        ],
        "viewerCount": 3,
        "topGifterRank": 0,
        "tikfinityUserId": 1888822,
        "tikfinityUsername": "wizardofdealz"
    }
}
```




# IDEAS / NOTES / PHASE 2
=========================

- use MediaPipe to extract face
  - ex: extract face from profilePicUrl and place on Dan Forden "toasty"