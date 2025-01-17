import mongoose, { Schema } from "mongoose";
import Location from "./location.model.js";
import User from "./users.models.js";

const unitSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: Schema.Types.ObjectId,
        ref: 'Location',
    },
    currentResident: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    futureResident: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
})

const Unit = mongoose.model('Unit', unitSchema);
export default Unit;