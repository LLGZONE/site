// @ts-check
module.exports = {
  async article_list(ctx, next) {
    const { start = 0, count } = ctx.query;
    const {
      subjects: article_list,
      total
    } = await ctx.service.article.article_list({
      start,
      count
    });
    ctx.success({
      article_list,
      has_more: start < total,
      cursor: Number(start) + Number(count)
    });
  }
};
