import { Response } from 'express';
import { IResponse } from '@/interface/response';

export function ResponseSuccess<TData = any>(
  res: Response,
  {
    data,
    token,
    message = 'Success',
    statusCode = 200,
  }: { data?: TData; token?: string; message?: string; statusCode?: number },
) {
  const response: IResponse = {
    success: true,
    token,
    statusCode,
    message,
    data,
  };

  return res.status(statusCode).send(response);
}
