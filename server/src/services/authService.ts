import { Service } from 'typedi';
import { UserDTO } from '../interfaces/userDTO';
import User from '../models/user';

@Service()
export default class AuthService {
    constructor() {}

    /**
     * * 가족 구성원 등록 로직
     * @param {code} 제공한 비밀키로 가족 등록
     */
    public async register({ user }: { user: UserDTO }): Promise<any> {
        try {
            const findUser = await User.findOne({ where: { code: user.code } });
            if (!findUser) return { success: false, message: '코드가 틀립니다' };
            return { success: true, message: `어서오세요 ${findUser.name}` };
        } catch (registerErr) {
            return { success: false, message: registerErr.message };
        }
    }
}
