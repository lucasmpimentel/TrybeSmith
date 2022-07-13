import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import CustomError from '../utils/CustomError';

const newProductSchema = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

const newProductValidation = async (req:Request, _res:Response, next:NextFunction) => {
  const { name, amount } = req.body;
  const { error } = newProductSchema.validate({
    name,
    amount,
  });

  if (error) {
    const code:number = error.details[0].type === 'any.required' ? 400 : 422;
    throw new CustomError(code, error.message);
  }
  next();
};

export default newProductValidation;