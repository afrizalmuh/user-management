import { IResponse } from '@/interface/response';
import { ClientError } from '@/utils/exception/client-error';
import { Response } from 'express';

function ErrorHandle(res: Response, err: any) {
  let response: IResponse;
  if (err instanceof ClientError) {
    response = {
      success: false,
      message: err.message,
      statusCode: err.statusCode,
    };
    return res.status(response.statusCode).send(response);
  } else {
    response = {
      success: false,
      message: err.message || 'Ooops! Something went wrong',
      statusCode: err.statusCode || 500,
    };
    return res.status(500).send(response);
  }
}

export { ErrorHandle };
