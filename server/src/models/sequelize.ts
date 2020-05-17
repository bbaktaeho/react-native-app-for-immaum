import { Sequelize } from 'sequelize';
import dbConfig from '../configs/db_config';

const { username, database, password } = dbConfig;
const sequelize = new Sequelize(database, username, password, { ...dbConfig });

// 순환 참조 -> 하나는 빈 객체
export { sequelize };
export default sequelize;
