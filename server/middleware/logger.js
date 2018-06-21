import { clientLogger } from '../helper/logger';

export default async (ctx, next) => {
  //clientLogger.info(ctx);
  await next();
};
