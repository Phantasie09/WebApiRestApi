import db from "../config/database.js";
import { Sequelize } from "sequelize";

const { DataTypes } = Sequelize; //Completed Modell

const Combi = db.define("portionator", {
        idportionator: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        menge: {
            type: DataTypes.INTEGER,
        },
        einheit: {
            type: DataTypes.STRING,
        },
        idrezepte: {
            type: DataTypes.INTEGER,

        },
        idzutaten: {
            type: DataTypes.INTEGER,
        }

    },
    {
        freezeTableName: true,
        timestamps: false
    });

export default Combi;