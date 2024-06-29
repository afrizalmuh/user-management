import express, { Request, Response } from 'express';
import { config } from '@/constant/config';
import { ResponseSuccess } from './utils/response';
import { baseRouter } from './routes';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const port = config.APP_PORT;

app.post('/', (req: Request, res: Response) => {
  return ResponseSuccess(res, { message: 'SERVER RUNNING', statusCode: 200 });
});

app.get('/', (req: Request, res: Response) => {
  return ResponseSuccess(res, { message: 'SERVER RUNNING', statusCode: 200 });
});

app.use('/', baseRouter);

app.listen(port, () => {
  console.log(`Server run on port: ${port}`);
});
