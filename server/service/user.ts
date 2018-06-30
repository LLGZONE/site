import { Service } from '../core';
class UserService extends Service {
  async getUserByLoginName(username, showPassword) {
    const user = await this.ctx.models.User.findOne({
      attributes: ['username', 'avatar', 'language', 'region', 'password'],
      where: {
        username
      },
      raw: true
    });
    if (!showPassword) {
      delete user.password;
      return user;
    }
    return user;
  }
}
export default UserService;
