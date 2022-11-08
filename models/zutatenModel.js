import db from "../config/database.js";
import {Sequelize} from "sequelize";

const {DataTypes} = Sequelize;

const Zutaten = db.define("zutaten", {
    idzutaten: {
        type: DataTypes.INTEGER,
        primaryKey:true
    },
    name: {
        type: DataTypes.STRING,
    },
    haltbarkeit: {
        type: DataTypes.INTEGER,
    },
    einheit: {
        type: DataTypes.STRING,
    },
    typ: {
        type: DataTypes.STRING,
    },
    preis: {
        type: DataTypes.INTEGER,
    }
},{
        freezeTableName: true,
        timestamps: false
    }

);

export default Zutaten;