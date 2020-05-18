import { Router } from 'express';
import userRouter from './user';
import authRouter from './auth';

export default () => {
    const app = Router();

    authRouter(app);
    userRouter(app);
    return app;
};
