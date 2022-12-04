"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const taskSchema = new mongoose_1.Schema({
    client: {
        type: String,
        required: true,
        trim: true
    },
    product: {
        type: String,
        require: true,
        trim: true
    },
    price: {
        type: Number,
        require: true,
        trim: true
    },
    quantity: {
        type: Number,
        require: true,
        trim: true
    },
    date: {
        type: Date,
        require: true,
        trim: true
    },
    done: {
        type: Boolean,
        default: false
    }
}, {
    versionKey: false
});
exports.default = (0, mongoose_1.model)('Task', taskSchema);
