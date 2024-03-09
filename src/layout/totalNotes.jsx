import React from 'react'

const TotalNotes = ({ note }) => {

    return (
        <>
            <div class="max-w-sm p-6 rounded-lg shadow border-solid border-2 border-colorOne bg-colorOne">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{note.title}</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{note.description}</p>
                <a href="/" class="inline-flex items-center px-3 py-2 text-sm  font-medium text-center text-white bg-colorFour rounded-lg hover:bg-teal-900 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Read more
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
                <div className='inline text-sm font-medium tracking-wider text-white border border-colorOne rounded-lg ml-2 py-2 px-3 pointer-events-none'>{note.tags}</div>
            </div>
        </>
    )
}

export default TotalNotes
