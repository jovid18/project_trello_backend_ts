import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'; // 이 줄을 수정했습니다.
import notFoundErrorHandler from './middleware/notFoundErrorMiddleware';
import generalErrorHandler from './middleware/generalErrorMiddleware';
import logMiddleware from './middleware/logMiddleware';
dotenv.config();

const app = express();
const PORT = process.env.PORT;
app.use(logMiddleware);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use(notFoundErrorHandler);
app.use(generalErrorHandler);
app.listen(PORT, () => {
  console.log(PORT, '포트로 서버가 열렸어요!');
});
