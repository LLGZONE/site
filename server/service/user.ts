import { Service } from '../core';
class UserService extends Service {
  async updateUserInfo(username, user) {
    const user_info = await this.ctx.models.User.findOne({
      where: {
        username
      }
    });
    if (!user_info) {
      throw new Error('用户不存在');
    }

    let new_user = await user_info.update({
      ...user
    });
    new_user = new_user.get({
      plain: true
    });
    delete new_user.password;
    return new_user;
  }
  async getUserByLoginName(username, showPassword = false) {
    const user = await this.ctx.models.User.findOne({
      attributes: [
        'username',
        'avatar',
        'language',
        'region',
        'password',
        'description'
      ],
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
