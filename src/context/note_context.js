import React from 'react'

export const noteContext = React.createContext()

export const NoteProvider = ({ children }) => {
    let host = "http://localhost:3100"
    let initalNotes = []
    let [notes, setNotes] = React.useState(initalNotes)

    let addNote = async ({ title, description, tags }) => {
        const response = await fetch(`${host}/api/adding`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, description, tags })
        });
        const json = await response.json();
        setNotes(json.data);
    }
    let fetchNotes = async () => {
        const response = await fetch(`${host}/api/allnotes`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            }
        });
        const json = await response.json();
        setNotes(json.data);
    }
    return <noteContext.Provider value={{ notes, addNote, fetchNotes }}>
        {children}
    </noteContext.Provider>
}

