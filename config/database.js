import { Sequelize } from "sequelize";

const db = new Sequelize('recipes', 'root', 'timtim', {
    host: "localhost",
    dialect: "mysql"
});

export default db;
