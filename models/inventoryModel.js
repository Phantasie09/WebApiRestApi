import db from "../config/database.js";
import {Sequelize} from "sequelize";

const {DataTypes} = Sequelize; //Nicht implementiert

const Inventory = db.define("inventory", {
    idinventory: {
        type: DataTypes.INTEGER,
        primaryKey:true
    },
    menge: {
        type: DataTypes.INTEGER,
    },
    accId: {
        type: DataTypes.INTEGER,
    },
    zutId: {
        type: DataTypes.INTEGER,
    },
    ablaufdatum: {
        type: DataTypes.DATE,
    }
},{
    freezeTableName: true,
    timestamps: false
});
export default Inventory;