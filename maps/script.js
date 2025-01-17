import { getRandomInt } from './utils.js';

// Canvas setups
const canvas = document.getElementById("roomCanvas");
const ctx = canvas.getContext("2d");

// Map and room parameters
const TILE_SIZE = 20; // Each grid cell is 20x20 pixels
const MAP_WIDTH = canvas.width / TILE_SIZE;
const MAP_HEIGHT = canvas.height / TILE_SIZE;
const ROOM_COUNT = 10;
const ROOM_MIN_SIZE = 3;
const ROOM_MAX_SIZE = 7;

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

function generateRooms() {
    const rooms = [];
    let i = 0;

    while (i < ROOM_COUNT) {
        const w = getRandomInt(ROOM_MIN_SIZE, ROOM_MAX_SIZE);
        const h = getRandomInt(ROOM_MIN_SIZE, ROOM_MAX_SIZE);
        const x = getRandomInt(0, MAP_WIDTH - w);
        const y = getRandomInt(0, MAP_HEIGHT - h);
        const newRoom = { x, y, w, h, i };

        if (isRoomValid(newRoom, rooms)) {
            rooms.push(newRoom);
            i++;
        }
    }
    return rooms;
}

// Helper functions
export const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function drawGrid() {
    ctx.strokeStyle = "#ccc";
    for (let x = 0; x <= canvas.width; x += TILE_SIZE) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }
    for (let y = 0; y <= canvas.height; y += TILE_SIZE) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }
}

function drawRooms(rooms) {
    for (let room of rooms) {
        const r = getRandomInt(0, 255);
        const g = getRandomInt(0, 255);
        const b = getRandomInt(0, 255);

        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.5)`;

        ctx.fillRect(
            room.x * TILE_SIZE,
            room.y * TILE_SIZE,
            room.w * TILE_SIZE,
            room.h * TILE_SIZE
        );
    }
}

// Main execution
function generateRoomsAndDraw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const rooms = generateRooms();
    drawGrid();
    drawRooms(rooms);
}

