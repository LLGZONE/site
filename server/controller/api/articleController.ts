// @ts-check
export default {
  async article_item(ctx) {
    const { item_id } = ctx.query;
    const detail = await ctx.service.article.article_item(item_id);
    ctx.success({
      detail: {
        ...detail,
        item_id
      }
    });
  },
  async article_list(ctx) {
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
