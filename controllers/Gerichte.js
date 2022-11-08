import Gericht from "../models/gerichteModel.js";
import {where} from "sequelize";

export const getAllGerichte = async (req, res) => {
    try {
        const gericht = await Gericht.findAll();
        res.json(gericht);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const testen = async (req, res) => {
    try {
        console.log(req.body[0]);
        console.log(req.body[1].zutaten);
        res.json({
            "message": "Product Created"
        });

    } catch (error) {
        res.json({ message: error.message });
    }
}


export const createGerichte = async (req, res) => {
    try {
        await Gericht.create(req.body);
        res.json({
            "message": "Product Created"
        });

    } catch (error) {
        res.json({ message: error.message });
    }
}




export const updateGerichte = async (req, res) => {
    try {
        await Gericht.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const deleteGerichte = async (req, res) => {
    try {
        await Gericht.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getGerichteById = async (req, res) => {
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