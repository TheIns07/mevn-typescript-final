import {Schema, model} from 'mongoose'

const taskSchema = new Schema({
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
})

export default model("Task",taskSchema)