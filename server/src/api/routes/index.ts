import { Router } from 'express';
import userRouter from './user';
import authRouter from './auth';

const app = Router();
export default () => {
    authRouter(app);
    userRouter(app);
    return app;
};
