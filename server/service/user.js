const { Service } = require('../core');
class UserService extends Service {
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
module.exports = UserService;
