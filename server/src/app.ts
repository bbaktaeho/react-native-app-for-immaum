import express from 'express';
import loader from './loader';
import Logger from './utils/logger';

async function startServer() {
    try {
        const app = express();

        await loader({ app });
        Logger.info('🔌 loader complete');

        app.listen(app.get('port'), () => {
            Logger.info(`http://localhost:${app.get('port')}`);
        });
    } catch (startServerErr) {
        Logger.error(startServerErr.message);
        process.exit(1);
    }
}

startServer();
