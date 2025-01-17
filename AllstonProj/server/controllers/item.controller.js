import express from 'express';
import { verifyToken } from '../services/authorization.service.js';
import Item from '../models/item.model.js';

const itemRouter = express.Router();
itemRouter.use(verifyToken);

//Add item
itemRouter.post('/', async (req, res) => {
    const item = req.body;
    const newItem = new Item(item);

    try {
        const savedLoc = await newItem.save();
        if (!savedLoc) {
            res.status(400).json({message: err.message});
        }
        res.status(200).json({message: "new Item Saved"});
    } catch (err) {
        res.status(400).json({message: err.message});
    }
})

//get all items
itemRouter.get('/', async (req, res) => {
    const items = await Item.find();
    
    if (!items) {
        res.status(400).json({message: "Couldn't find items"});
    }

    res.status(200).json(items);
})

export default itemRouter;