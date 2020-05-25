import { Request, Response, NextFunction } from 'express';
import { check, validationResult } from 'express-validator';

/**
 * * 가족 구성원 등록
 * @body {name, code}
 */
const registerValidator = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await Promise.all([check('code').exists().run(req), check('name').exists().run(req)]);
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(422).json({ succes: false, errors: errors.array() });
        next();
    } catch (registerValidatorErr) {
        return res.status(500).json({ succes: false, message: registerValidatorErr.message });
    }
};

export { registerValidator };
