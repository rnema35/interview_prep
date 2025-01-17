import mongoose from 'mongoose';
import path from 'path';
import 'dotenv/config'
import app from './app.js'

const port = process.env.PORT;
const mongoUrl = process.env.MONGOURL

async function startServer() {

    mongoose.connect(mongoUrl);
    const database = mongoose.connection;

    app.listen(port, () => {
        console.log(`Listening on Port ${port}`)
    })
    
    //checking if the mongoDB connection is working
    database.on('error', (error) => {
        console.log(error)
    })
    database.once('connected', () => {
        console.log('Database Connected');
    })
}

startServer();