import React, { useContext } from 'react'
import noteContext from '../context/comments/noteContext';
// import Modal from './Modal';
import NotesItem from './NotesItem';

function Notes() {
  const context = useContext(noteContext);
  const { notes } = context;

  // const storeItem =  localStorage.getItem(("notes"));
  // JSON.parse(storeItem)




  return (
    <>
      {notes.length === 0 && <div className="noDisplay" style={{ fontSize: "20px", textAlign:"center", padding:"10px" }}>No Comment to Display</div>
      }
      {notes.map((note) => {
        return <div><NotesItem note={note} /></div>
      })}
      {/* {storeItem} */}
    </>
  )
}

export default Notes
