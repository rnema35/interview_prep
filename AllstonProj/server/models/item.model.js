import mongoose, { Schema } from "mongoose";
import User from "./users.models.js";
import Unit from "./unit.model.js";

const itemSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    unit: {
        type: String,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
    status: {
        type: Boolean,
    }
})

const Item = mongoose.model('Item', itemSchema);
export default Item;