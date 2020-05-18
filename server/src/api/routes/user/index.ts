import { Router } from 'express';

const router = Router();
export default (app: Router) => {
    app.use('/users', router);

    router.post('/', async (req, res) => {});
    router.get('/', async (req, res) => {});
    router.put('/', async (req, res) => {});
    router.delete('/', async (req, res) => {});
};
