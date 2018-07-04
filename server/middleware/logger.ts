//import { clientLogger } from '../helper/logger';

export default async (_, next) => {
  //clientLogger.info(ctx);
  await next();
};
