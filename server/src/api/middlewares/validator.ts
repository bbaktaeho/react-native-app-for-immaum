import { Request, Response, NextFunction } from 'express';
import { check, validationResult } from 'express-validator';

const registerValidator = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await Promise.all([check('code').exists().isString().run(req)]);
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(422).json({ succes: false, errors: errors.array() });
        next();
    } catch (registerValidatorErr) {
        return res.status(500).json({ succes: false, message: registerValidatorErr.message });
    }
};

export { registerValidator };
