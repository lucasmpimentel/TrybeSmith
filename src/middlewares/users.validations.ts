import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import CustomError from '../utils/CustomError';

const newUserSchema = Joi
  .object({
    username: Joi.string().min(3).required(),
    classe: Joi.string().min(3).required(),
    level: Joi.number().greater(0).required(),
    password: Joi.string().min(8).required(),
  })
  .messages({
    'number.greater': '{#label} must be greater than or equal to 1',
  });

const newUserValidation = async (req: Request, res:Response, next: NextFunction) => {
  const { username, classe, level, password } = req.body;
  const { error } = newUserSchema.validate({
    username,
    classe,
    level,
    password,
  });
  console.log(error?.details[0].type);
  if (error) {
    const code: number = error.details[0].type === 'any.required' ? 400 : 422;
    throw new CustomError(code, error.message);
  }
  
  next();
};

export default newUserValidation;