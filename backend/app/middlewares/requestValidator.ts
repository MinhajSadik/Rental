import { NextFunction, Request, Response } from 'express';
import { AnyZodObject, ZodEffects } from 'zod';

class requestValidator {
  validateRequest = (schema: AnyZodObject | ZodEffects<AnyZodObject>) => async function(req: Request, res: Response, next: NextFunction): Promise<void> {
      try {
          await schema.parseAsync({
              body: req.body,
              query: req.query,
              params: req.params,
              cookies: req.cookies,
          });
          return next();
      } catch (error) {
          next(error);
      }
  }
}

export default new requestValidator();
