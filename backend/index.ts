import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { connectDB } from './app/config/db';
import todoRoutes from './app/routes/todoRoutes';

const app: Express = express();

app.use(cors());

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 8081;
app.use('/api/todo', todoRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

connectDB(process.env.MONGODB_URL || '');

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
