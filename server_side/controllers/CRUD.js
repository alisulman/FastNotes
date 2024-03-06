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
        console.log(error)
        res.json({
            error: error instanceof Error ? error.message : true,
            message: `Something went wrong`
        })
    }
}
