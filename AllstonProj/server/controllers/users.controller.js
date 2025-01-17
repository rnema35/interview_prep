import express from 'express';
import bcrypt from 'bcrypt';

import User from '../models/users.models.js';
import { verifyToken } from '../services/authorization.service.js';

const usersRouter = express.Router();

usersRouter.use(verifyToken)

//get all users
usersRouter.get('/', async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
})

//create new user
usersRouter.post('/newUser', async (req, res) => { 
    const {name, username, password} = req.body;

    const saltRounds = 10;
    const hashedPass = bcrypt.hashSync(password, saltRounds);

    const newUser = new User ({
        name: name, 
        username: username,
        password: hashedPass
    })

    try {
        const saveUser = await newUser.save();
        res.status(201).json(saveUser);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
});

//update existing user
usersRouter.post('/updateUser/:id', async (req, res) => {
    const userId = req.params.id;
    const updates = req.body;

    if (updates.hasOwnProperty('password')){
        const saltRounds = 10;
        const pass = await bcrypt.hashSync(updates.password, saltRounds);
        updates.password = pass;
    }

    const updateOptions= {
        new: true,
        runValidators: true
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(userId, updates, updateOptions);

        if (!updatedUser) {
            res.status(400).json({error: err.message})
        } 
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
}); 

//delete existing user
usersRouter.post('/deleteUser/:id', async (req, res) => {
    const userId = req.params.id;

    try {
        const deletedUser = await User.findByIdAndDelete(userId);

        if(!deletedUser) {
            res.status(400).json({error: err.message})
        } 
        res.status(200).json({message: "User deleted"});

    } catch (err) {
        res.status(400).json({error: err.message});
    }
})

export default usersRouter;