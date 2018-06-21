import { Service } from '../core';
import douban_api from '../constants/douban_api';
import http from '../helper/http';
class ArticleService extends Service {
  async article_list({ start, count }) {
    const result = await http({
      url: douban_api.movie_250,
      params: {
        start,
        count
      }
    });
    return result;
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
export default ArticleService;
