import React, { useContext, useState } from 'react';
import noteContext from '../context/comments/noteContext';

function Comment() {
    const context = useContext(noteContext);
    const { AddNote } = context;
    const [note, setNote] = useState({ name: "", suggestion: "" })
    const handleSubmit = (e) => {
        e.preventDefault();
        AddNote(note.name, note.suggestion);
        // localStorage.setItem("notes",JSON.stringify(note))

    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <div className='commentsContainer'>
            <div className="commentSection">
                <h2>Comments</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className="nameDiv">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" onChange={onChange} value={note.name} required minLength={5} />
                    </div>
                    <div className="suggestionDiv">
                        <label htmlFor="suggestion">Comment</label>
                        <input type="text" name="suggestion" id="suggestion" onChange={onChange} value={note.suggestion} required minLength={5} />
                    </div>
                    <button disabled={note.name.length < 5 || note.suggestion.length < 5}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Comment
