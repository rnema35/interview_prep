import mongoose, { Schema } from "mongoose";
import Location from "./location.model.js";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    }, 
    username: {
        type: String,
        required: true,
        unique: true,
    }, 
    password: {
        type: String,
        required: true,
    },
    currentlocation: {
        type: Schema.Types.ObjectId,
        ref: 'Location',
    },
    newlocation: {
        type: Schema.Types.ObjectId,
        ref: 'Location',
    }
})

const User = mongoose.model('User', userSchema);
export default User;