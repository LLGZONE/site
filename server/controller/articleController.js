// @ts-check
module.exports = {
  async article_list(ctx, next) {
    const article_list = await ctx.service.article.article_list();
    console.log('article_list:', article_list);
    ctx.success({
      article_list
    });
  }
};
