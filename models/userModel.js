import db from "../config/database.js";


const Nutzer = db.define("user", {
    iduser: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull:false
    },
    passwort: {
        type: DataTypes.STRING,
        allowNull:false
    }
});
export default Nutzer;