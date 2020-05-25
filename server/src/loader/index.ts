import { Application } from 'express';
import expressLoader from './expressLoader';
import { sequelize } from '../models';
import Logger from '../utils/logger';

const loader = async ({ app }: { app: Application }) => {
    try {
        // 디비 연동
        await sequelize
            .sync({ force: false, alter: true })
            .then(() => {
                Logger.info('🔌 db connected complete');
            })
            .catch((err) => {
                Logger.error(err.message);
            });
        // 익스프레스 로딩
        await expressLoader({ app });
        Logger.info('🔌 express load complete');
    } catch (loaderErr) {
        console.error(loaderErr.message);
        process.exit(1);
    }
};

export default loader;
