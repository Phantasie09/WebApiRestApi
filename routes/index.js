import express from "express";


const router = express.Router();



import  {
    getAllGerichte,
    createGerichte,
    testen
} from "../controllers/Gerichte.js";

import  {
    getAllZutaten,
    addZutat
} from "../controllers/Incredients.js";

router.get('/', getAllGerichte);
router.post('/',createGerichte);
router.post('/test',testen);
router.get('/inc', getAllZutaten);
router.post('/inc', addZutat);
/*
router.get('/', getAllProducts);
router.post('/', createProduct);
router.get('/:id', getProductById);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);
*/
export default router;