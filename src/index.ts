import express, { Request, Response } from 'express';
import { config } from '@/constant/config';
import { ResponseSuccess } from './utils/response';
import { baseRouter } from './routes';

const app = express();

const port = config.APP_PORT;

app.post('/', (req: Request, res: Response) => {
  return ResponseSuccess(res, { message: 'SERVER RUNNING', statusCode: 200 });
});

app.use('/api', baseRouter);

app.listen(port, () => {
  console.log(`Server run on port: ${port}`);
});
