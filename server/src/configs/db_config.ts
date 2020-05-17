import dotenv from 'dotenv';
dotenv.config();

type dbConfig = {
    username: string;
    password: string;
    database: string;
    host: string;
    [key: string]: any;
};

const Config: dbConfig = {
    username: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_DATABASE!,
    host: process.env.DB_HOST!,
    logging: false,
    dialect: 'mariadb',
};

export default Config;
