import express from 'express';
import Category from '../models/category.js';

const categoryRouter = express.Router();

categoryRouter.get('/', async (req, res) => {
    try {
        const listCategory = await Category.find().exec();
        res.status(200).json(listCategory);
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }

})

export default categoryRouter;