import mongoose, { Schema } from "mongoose";

const locationSchema = new Schema({
    unit: {
        type: String,
        unique: true,
    },
    address: {
        type: String,
        required: true,
    }, 
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    zipcode: {
        type: Number,
        required: true,
    }
})

const Location = mongoose.model('Location', locationSchema);
export default Location;