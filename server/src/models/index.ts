import User, { associate as UserAssociate } from './user';
export * from './sequelize';

const db = {
    User,
};
export type dbType = typeof db;
