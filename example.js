const TwitterDl = require('./index.js');

const twdl = new TwitterDl('https://twitter.com/Turkoinimchat/status/1634017310166990848/video/1');

twdl.getVideo()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });