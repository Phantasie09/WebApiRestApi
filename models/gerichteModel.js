import db from "../config/database.js";
import { Sequelize } from "sequelize";

const { DataTypes } = Sequelize; //Completed Modell

const Rezepte = db.define("gerichte", {
    idgerichte: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    art: {
        type: DataTypes.STRING,
    },
    dauer: {
        type: DataTypes.TIME,
    },
    name: {
        type: DataTypes.STRING,

    },
    suess: {
        type: DataTypes.BOOLEAN,

    },
    zutaten: {
        type: DataTypes.JSON,

    },
    kategorie: {
        type: DataTypes.STRING,
    },
    link: {
        type: DataTypes.STRING,
    },
    varianten: {
        type: DataTypes.STRING,
    }
},
{
    freezeTableName: true,
    timestamps: false
});

export default Rezepte;