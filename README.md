# Twitter Media Downloader
Scrap data from Twitter media downloader site, and get info from yout Twitter link.

## Install
```
npm install twitter-media-downloader
```

## Changelog
- #### v1.0.0
  - Initial commit

## Usage
```
const TwitterDl = require('twdl');

const twdl = new TwitterDl('https://twitter.com/Turkoinimchat/status/1634017310166990848/video/1');

twdl.getVideo()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
```

## Issues & Contact
- Create issue session in [Github Repo](https://github.com/Aromakelapa/twitter-media-downloader/issues)

- You can reach me on [Telegram](https://t.me/Aromakelapa)

### Thanks for using my module, Hope you forgive me if it shows an error, because I'm newbie at this :>
