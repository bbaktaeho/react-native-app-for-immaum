import express, { Application } from 'express';
import hpp from 'hpp';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
dotenv.config();

const expressLoader = async ({ app }: { app: Application }): Promise<void> => {
    app.set('port', process.env.PORT!);

    app.use(morgan('dev')); // 라우팅할 때마다 로그
    app.use(cors());
    app.use(hpp());
    app.use(helmet());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // 라우터 등록
};

export default expressLoader;
