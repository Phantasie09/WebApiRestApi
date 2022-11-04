import { Sequelize } from "sequelize";

const db = new Sequelize('mern_db', 'root', 'timtim', {
    host: "localhost",
    dialect: "mysql"
});

export default db;
