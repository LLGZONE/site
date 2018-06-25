export default function format_user(user) {
  return {
    username: user.username,
    avatar: user.avatar || 'https://p0.ipstatp.com/large/0059f69285a900997b20'
  };
}
