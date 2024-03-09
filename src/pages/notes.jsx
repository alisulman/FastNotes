import React from 'react'
import { noteContext } from '../context/note_context'
import TotalNotes from '../layout/totalNotes'

const Notes = () => {
    let context = React.useContext(noteContext)
    let { notes, fetchNotes } = context
    React.useEffect(() => {
        fetchNotes()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
        <h1 className='text-4xl font-bold text-colorTwo mt-16 ml-6'>Total Number of Notes: {notes.length}</h1>
            <div className='grid grid-cols-3 gap-12 ml-7 mt-16 mb-20'>
                {notes.map((note) => {
                    return <TotalNotes key={note._id} note={note} />
                })}
            </div>
        </>
    )
}

export default Notes
