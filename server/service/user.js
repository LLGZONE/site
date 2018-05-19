const { Service } = require('../core');
class UserService extends Service {
  async getUserByLoginName(username) {
    const user = await this.ctx.models.User.findOne({
      where: {
        username
      }
    });
    return user;
  }
}
module.exports = UserService;
