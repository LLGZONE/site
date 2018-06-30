export default function format_user(user_info) {
  return {
    username: user_info.username,
    avatar:
      user_info.avatar || 'https://p0.ipstatp.com/large/0059f69285a900997b20',
    language: 'en',
    region: 'us'
  };
}
