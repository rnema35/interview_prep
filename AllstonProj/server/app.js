import express from 'express';
import cors from 'cors';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';

import { setAuthCookie } from './services/authorization.service.js';
import usersRouter from './controllers/users.controller.js';
import unitRouter from './controllers/unit.controller.js';
import itemRouter from './controllers/item.controller.js';
import User from './models/users.models.js';

const app = express();
app.use(express.json());
app.use(cors({
    origin:"*"
}))
app.use(cookieParser());

app.post('/login', async (req, res) => {
    const {username, password} = req.body;

    const foundUser = await User.findOne({ username });
    const passHash = foundUser.password;

    //Check if the password is correct
    const validation = await bcrypt.compare(password, passHash);

    if(!validation) {
        res.status(401).json({message: "Invalid Password"});
    }

    console.log(foundUser);

    try {
        //generates token, and puts it in a cookie
        setAuthCookie(res, foundUser);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
})

app.use('/users', usersRouter);
app.use('/unit', unitRouter);
app.use('/item', itemRouter);

export default app;