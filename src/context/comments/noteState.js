import React, { useState } from 'react'
import noteContext from './noteContext'

function NoteState(props) {
    const initailNotes = [

        {
            "id" :"1",
            "name": "John",
            "suggestion": "Hi this is suggestion"
        },
        {
            "id":"2",
            "name": "Chris",
            "suggestion": "Hi this is suggestion"
        },
        {
            "id":"3",
            "name": "Wilson",
            "suggestion": "Hello world"
        },
        {
            "id":"4",
            "name": "William",
            "suggestion": "Hello world"
        }
    ]
    const [notes, setNotes] = useState(initailNotes)

    const AddNote = (name, suggestion) => {

        const note = {
            "name": name,
            "suggestion": suggestion
        }
        setNotes(notes.concat(note));
    }

    const deleteNote = (id) => {
        const delNote = notes.filter((note) => {
            return note.id !== id
        })
        setNotes(delNote);
    }

    const updateNote = (id, name, suggestion) => {
        const newUpNote = JSON.parse(JSON.stringify(notes));
        for (let index = 0; index < newUpNote.length; index++) {
            if (newUpNote[index].id === id) {
                newUpNote[index].name = name;
                newUpNote[index].suggestion = suggestion;
                break;
            }
        }
        setNotes(newUpNote)
    }

    return (
        <noteContext.Provider value={{ notes, AddNote, deleteNote, updateNote }}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;
