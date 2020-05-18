import { Router } from 'express';
import middlewares from '../../middlewares';
import { Container } from 'typedi';

const router = Router();

export default (app: Router) => {
    app.use('/auth', router);

    /**
     * * 가족 구성원 등록
     */
    router.post('/', middlewares.registerValidator, async (req, res) => {
        try {
        } catch (err) {
            res.status(500).json({ sucess: false, message: err.message });
        }
    });
};
