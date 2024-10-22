import { Router } from 'express';
import middlewares from '../../middlewares';
import { Container } from 'typedi'; // IoC Container
import AuthService from '../../../services/authService';
import { UserDTO } from '../../../interfaces/userDTO';

const router = Router();

export default (app: Router) => {
    app.use('/auth', router);

    /**
     * * 가족 구성원 등록
     */
    router.post('/', middlewares.registerValidator, async (req, res) => {
        try {
            const user = req.body;
            const authServiceInstance = Container.get(AuthService);
            const { success, message, status } = await authServiceInstance.register({ user });
            res.status(status).json({ success, message });
        } catch (err) {
            res.status(500).json({ sucess: false, message: err.message });
        }
    });
};
