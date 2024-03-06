import React from 'react'
import { NoteForm } from '../components/Form'

const NoteLayout = () => {
  return (
    <div className='absolute top-20 w-1/2 h-3/4 ml-5 p-6 rounded-3xl border-solid border-2 border-colorOne bg-colorOne shadow-2xl shadow-slate-900'>
        <div className='flex justify-center text-3xl text-white font-medium mb-4'>Add a note</div>
        <NoteForm />
    </div>
  )
}

export default NoteLayout
