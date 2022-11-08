import Combination from "../models/combiModel.js";
import {where} from "sequelize";


export const getZutatenByGericht = async (req, res) => {
    try {
        const gericht = await Gericht.findAll({
            where: {
                idgerichte: req.params.id
            }
        });
        res.json(gericht[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
}
export const getGerichtByZutaten = async (req, res) => {
    try {
        const gericht = await Gericht.findAll({
            where: {
                idgerichte: req.params.id
            }
        });
        res.json(gericht[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
}