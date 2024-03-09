import Note from "../models/note_model.js"

export const add = async (req, res) => {
    try {
        let { title, description, tags } = req.body
        let newNote = await Note.create({ title, description, tags })
        res.json({
            error: false,
            message: 'The note is added successfully',
            data: newNote
        })
    } catch (error) {
        res.json({
            error: true,
            message: `Something went wrong`
        })
    }
}

export const fetch = async (req, res) => {
    try {
        let notes = await Note.find()
        res.json({
            error: false,
            total : notes.length,
            data: notes
        })
    } catch (error) {
        res.json({
            error: error,
            message: `Something went wrong`
        })
    }
}