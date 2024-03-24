import { Request, Response, NextFunction } from 'express';
import { logger } from './logMiddleware';

export default (err: any, req: Request, res: Response, next: NextFunction) => {
  logger.error(`Error Status: ${err.status}, Message: ${err.message}`);
  return res.status(err.status || 500).json({
    error: {
      message: err.message,
    },
  });
};
