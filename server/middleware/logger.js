const { clientLogger } = require('../helper/logger');
module.exports = async (ctx, next) => {
  clientLogger.info(ctx);
  await next();
};
