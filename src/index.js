const axios   = require('axios');
const cheerio = require('cheerio');

module.exports = class TwitterDl {
  constructor (link) {
    this.link = link
  }

  async getVideo() {
    const
      host    = "https://twdown.net/download.php",
      headers = { "Content-Type": "application/x-www-form-urlencoded" },
      data    = { "URL": this.link },
      res     = await axios.post(host, data, {headers}),
      $       = cheerio.load(res.data);

    if($('div.alert.alert.alert-danger.alert-dismissible.col-md-8.col-md-offset-2').text().includes('Umm...')) {
      return 'Video Not Found!';
    }

    const result = {
      author: $('h4 strong').text(),
      description: $('div p').text(),
      urls: {
        hd: null,
        ed: null,
        sd: null,
      }
    };

    let quality = [];

    $('a[download]').each((i, el) => {
      const href = $(el).attr('href');
      quality.push(href);
    });

    const [ hd, ed, sd ] = quality;
    result.urls = { hd, ed, sd };

    return result;
  }
}