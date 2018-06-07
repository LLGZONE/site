const { Service } = require('../core');
const axios = require('axios');
const douban_api = require('../constants/douban_api');
class ArticleService extends Service {
  async article_list() {
    console.log('models:', this.ctx.models);
    const result = await axios({
      url: douban_api.movie_250
    });
    console.log('result:', result.data.subjects);
    return result.data.subjects.map(item => ({
      id: item.id,
      title: item.title,
      images: item.images
    }));
  }
  async getUserByLoginName(username) {
    const user = await this.ctx.models.User.findOne({
      where: {
        username
      },
      raw: true
    });
    return user;
  }
}
module.exports = ArticleService;
