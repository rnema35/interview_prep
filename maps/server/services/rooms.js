const math = require('mathjs');

function isRoomValid(newRoom, existingRooms) {
    for (let room of existingRooms) {
        if (
            newRoom.x < room.x + room.w &&
            newRoom.x + newRoom.w > room.x &&
            newRoom.y < room.y + room.h &&
            newRoom.y + newRoom.h > room.y
        ) {
            return false;
        }
    }
    return true;
}

function getRandomInt(min, max) {
    return math.floor(math.random() * (max - min + 1)) + min;
}

function generateRooms(room_min_size, room_max_size, map_width, map_height) {
    const rooms = [];
    let i = 0;

    while (i < ROOM_COUNT) {
        const w = getRandomInt(room_min_size, room_max_size);
        const h = getRandomInt(room_min_size, room_max_size);
        const x = getRandomInt(0, map_width - w);
        const y = getRandomInt(0, map_height - h);
        const newRoom = { x, y, w, h, i };

        if (isRoomValid(newRoom, rooms)) {
            rooms.push(newRoom);
            i++;
        }
    }
    return rooms;
}

module.exports = {
    generateRooms,
}