const express = require('express');
const path = require('path');
const cors = require('cors')

const { generateRooms } = require('./services/rooms.js');

const app = express();
app.use(cors());
PORT = 8000;

app.get('/generateRooms', () => {
    console.log("Frontend asking");
    rooms = generateRooms();
    res.json(rooms);
});
    

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
