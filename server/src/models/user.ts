// npm i sequelize-typescript
import { Model, DataTypes } from 'sequelize';
import { sequelize } from './sequelize';
import { dbType } from './index';

class User extends Model {
    readonly id!: number;
    name!: string;
    phone!: string;
}

User.init(
    {
        name: { type: DataTypes.STRING(20), allowNull: false },
        phone: { type: DataTypes.STRING, allowNull: true, defaultValue: '010-' },
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
