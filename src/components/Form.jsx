import React from 'react'
import { noteContext } from '../context/note_context'

export function NoteForm() {
    let context = React.useContext(noteContext)
    let {addNote} = context
    let [note, setNote] = React.useState({title: '', description: '', tags: ''})
    let handleOn = (e) => {
        setNote({...note, [e.target.name] : e.target.value})
    }
    let handleClick = (e) => {
        e.preventDefault()
        addNote(note)
    }
    return (
        <form className="max-w-lg mx-auto">
            <div className="mb-5">
                <div className='inputbox1 relative flex my-8'>
                    <input
                        type="text"
                        className='relative flex  outline-none w-full p-2 bg-colorOne text-white transition-all duration-300 rounded-lg border-2 border-colorOne'
                        id='title'
                        name= 'title'
                        onChange={handleOn}
                        required
                    />
                    <span className='absolute left-0 -top-1.5 p-4 uppercase font-bold pointer-events-none transition-all duration-300 text-colorOne' id='message'>Title</span>
                </div>
                <div className='inputbox2 relative flex my-8'>
                    <textarea
                        type="text"
                        className='relative flex  outline-none w-full p-2 bg-colorOne text-white transition-all duration-300 rounded-lg border-2 border-colorOne'
                        id='description'
                        name='description'
                        onChange={handleOn}
                        rows={4}
                        required
                    />
                    <span className='absolute left-0 -top-1.5 p-4 uppercase font-bold pointer-events-none transition-all duration-300 text-colorOne' id='message'>description</span>
                </div>
                <div className='inputbox1 relative flex my-8'>
                    <input
                        type="text"
                        className='relative flex  outline-none w-full p-2 bg-colorOne text-white transition-all duration-300 rounded-lg border-2 border-colorOne'
                        id='tags'
                        name='tags'
                        onChange={handleOn}
                        required
                    />
                    <span className='absolute left-0 -top-1.5 p-4 uppercase font-bold pointer-events-none transition-all duration-300 text-colorOne' id='message'>tags</span>
                </div>
            </div>
            <button 
            type="submit"
            className="text-gray-800 font-black tracking-wider bg-colorTwo hover:bg-teal-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            onClick={handleClick}
            >Add Note</button>
        </form>
    )
}
