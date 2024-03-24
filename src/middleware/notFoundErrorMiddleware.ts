import { Request, Response, NextFunction } from 'express';

// ResponseError 인터페이스 정의
interface ResponseError extends Error {
  status?: number;
}

export default (req: Request, res: Response, next: NextFunction) => {
  // Error 객체를 생성하고 ResponseError로 타입을 지정하여 status 속성을 추가
  const error: ResponseError = new Error(
    `${req.method} ${req.url} 라우터가 없습니다.`
  );
  error.status = 404;

  // 다음 미들웨어로 에러를 전파
  next(error);
};
