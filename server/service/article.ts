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
  async article_item(item_id) {
    const result = await {
      title: 'good article',
      content: 'this content is good',
      item_id
    };
    return result;
  }
}
export default ArticleService;
