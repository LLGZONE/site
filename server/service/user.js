class UserService{
  constructor(ctx){
    this.ctx = ctx;
  }
  async getUserByLoginName(username) {
    const user = await this.ctx.models.User.findOne({
      where: {
        username
      }
    })
    return user;
  }
}
module.exports = UserService;