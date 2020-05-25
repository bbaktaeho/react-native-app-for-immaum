// npm i sequelize-typescript
import { Model, DataTypes } from 'sequelize';
import { sequelize } from './sequelize';
import { dbType } from './index';

class User extends Model {
    readonly id!: number;
    name!: string;
    code!: string;
    phone?: string;
}

User.init(
    {
        name: { type: DataTypes.STRING(20), allowNull: false },
        phone: { type: DataTypes.STRING, allowNull: true, defaultValue: '010-' },
        code: {type: DataTypes.STRING, allowNull: false, unique: true}
    },
    {
        sequelize,
        modelName: 'User',
        tableName: 'user',
        charset: 'utf8',
        collate: 'utf8_general_ci',
    }
);

export const associate = (db: dbType) => {
    // 관계설정
};
export default User;
