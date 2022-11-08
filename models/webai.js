import db from "../config/database.js";


const Proposals = db.define("webai", {
    idwebai: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    passwort: {
        type: DataTypes.STRING,
        allowNull:false
    }
});
export default Proposals;