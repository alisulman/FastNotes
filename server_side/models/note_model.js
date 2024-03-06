import mongoose, { Schema } from 'mongoose'

const noteSchema = new Schema({
    user_ID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user"
    },
    title: {
        type: String,
        require : true
    },
    description: {
        type: String,
        require : true
    },
    tags: {
        type: String,
        default : ""
    },
}, {timestamps: true})

const Note = mongoose.model('notes', noteSchema)
export default Note;