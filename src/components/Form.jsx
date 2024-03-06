import React from 'react'

export function NoteForm() {
    let [title, setTitle] = React.useState('')
    let [description, setDescription] = React.useState('')
    let [tags, setTags] = React.useState('')

    return (
        <form className="max-w-lg mx-auto">
            <div className="mb-5">
                <div className='inputbox1 relative flex my-8'>
                    <input
                        type="text"
                        className='relative flex  outline-none w-full p-2 bg-colorOne text-white transition-all duration-300 rounded-lg border-2 border-colorOne'
                        id='title'
                        name= 'title'
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
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
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }}
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
                        value={tags}
                        onChange={(e) => { setTags(e.target.value) }}
                        required
                    />
                    <span className='absolute left-0 -top-1.5 p-4 uppercase font-bold pointer-events-none transition-all duration-300 text-colorOne' id='message'>tags</span>
                </div>
            </div>
            <button type="submit" className="text-gray-800 font-black tracking-wider bg-colorTwo hover:bg-teal-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Add Note</button>
        </form>
    )
}
