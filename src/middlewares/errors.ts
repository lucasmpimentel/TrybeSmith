import { Request, Response } from 'express';

interface ObjectError {
  code: number,
  message: string,
}

const error = (err:ObjectError, _req:Request, res:Response): Response => (
  res.status(err.code || 500).json({ message: err.message })
);

export default error;