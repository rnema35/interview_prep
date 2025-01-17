import express from 'express';

import Unit from '../models/unit.model.js';
import Location from '../models/location.model.js';
import { verifyToken } from '../services/authorization.service.js';

const unitRouter = express.Router();
unitRouter.use(verifyToken)

//Make a location
unitRouter.post('/locations', async (req, res) => {
    const location = req.body;
    const newLocation = new Location(location);

    try {
        const savedLoc = await newLocation.save();
        if (!savedLoc) {
            res.status(400).json({message: err.message});
        }
        res.status(200).json({message: "new Location Saved"});
    } catch (err) {
        res.status(400).json({message: err.message});
    }
})

//get all locations
unitRouter.get('/location', async (req, res) => {
    const locations = await Location.find();
    
    if (!locations) {
        res.status(400).json({message: "Couldn't find locations"});
    }

    res.status(200).json(locations)
})

//add unit
unitRouter.post('/', async (req, res) => {
    const unit = req.body;
    const newUnit = new Unit(unit);
    try {
        const savedUnit = await newUnit.save();
        if (!savedUnit) {
            res.status(400).json({message: err.message});
        }
        res.status(200).json({message: "new Unit Saved"});
    } catch (err) {
        res.status(400).json({message: err.message});
    }
})

//get units
unitRouter.get('/', async (req, res) => {
    const locations = await Unit.find();
    
    if (!locations) {
        res.status(400).json({message: "Couldn't find units"});
    }

    res.status(200).json(locations)
})

export default unitRouter;