import Zutat from "../models/zutatenModel.js";
import {where} from "sequelize";


export const getAllZutaten = async (req, res) => {
    try {
        const daten = await Zutat.findAll();
        res.json(daten);
    } catch (error) {
        res.json({ message: error.message });
    }
}
export const addZutat = async (req, res) => {
    try {
        await Zutat.create(req.body);
        res.json({
            "message": "Product Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}