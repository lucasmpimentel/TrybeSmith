import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import CustomError from '../utils/CustomError';

const orderSchema = Joi.object({
  productsIds: Joi.array().items(Joi.number()).min(1).required(),
}).messages({
  'array.min': '{#label} must include only numbers',
});

const orderValidation = async (req: Request, _res:Response, next: NextFunction) => {
  const { productsIds } = req.body;
  const { error } = orderSchema.validate({ productsIds });

  if (error) {
    const code: number = error.details[0].type === 'any.required' ? 400 : 422;
    throw new CustomError(code, error.message);
  }

  next();
};

export default orderValidation;