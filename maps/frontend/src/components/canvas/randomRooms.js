import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Canvas from './Canvas.js'

const RandomRooms = () => {
    const [rooms, setRooms] = useState([]);
    const [minSize, setMinSize] = useState(5);
    const [maxSize, setMaxSize] = useState(15);
    const [mapWidth, setMapWidth] = useState(500);
    const [mapHeight, setMapHeight] = useState(500);

    const handleRandomRooms = () => {
        axios.get("http://localhost:8000/generateRooms", {
            params: {
                min_size: minSize,
                max_size: maxSize,
                map_width: mapWidth, 
                map_height: mapHeight,
            },
        })
            .then((response) => {
                setRooms(response.data);
            })
            .catch((error) => {
                console.log('Error in getting Random Rooms');
            })
    };

    return (
        <div>
            <h1>Random Room Generation</h1>

            <div>
                <label>Min Room Size</label>
                <input
                    type='number'
                    value={minSize}
                    onChange={(x) => setMinSize(Number(x.target.value))}
                />
            </div>

            <div>
                <label>Max Room Size</label>
                <input
                    type='number'
                    value={maxSize}
                    onChange={(x) => setMaxSize(Number(x.target.value))}
                />
            </div>


            <div>
                <label>Map Width</label>
                <input
                    type='number'
                    value={mapWidth}
                    onChange={(x) => setMapWidth(Number(x.target.value))}
                />
            </div>

            <div>
                <label>Map Height</label>
                <input
                    type='number'
                    value={mapHeight}
                    onChange={(x) => setMapHeight(Number(x.target.value))}
                />
            </div>

            <button onClick={handleRandomRooms}>Generate Rooms</button>
        </div>
    );
};

export default RandomRooms;