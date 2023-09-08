import React, { useContext, useState } from 'react'
import { AiFillDelete } from "@react-icons/all-files/ai/AiFillDelete"
import { FiEdit } from "@react-icons/all-files/fi/FiEdit"
import noteContext from '../context/comments/noteContext';

function NotesItem(props) {
  const context = useContext(noteContext);
  const { deleteNote, updateNote } = context;
  const { note } = props;
  const [showModal, setShowModal] = useState(false);
  const [enote, setENote] = useState({ id: "", ename: "", esuggestion: "" });

  // useEffect(()=>{
  //   document.body.style.overflowY = "hidden";
  //   return ()=>{
  //     document.body.style.overflowY = "scroll"
  //   }
  // }, [])
  const onChange = (e) => {
    setENote({ ...enote, [e.target.name]: e.target.value })
  }

  const editNote = (currentNote) => {
    setENote({ id: currentNote.id, ename: currentNote.name, esuggestion: currentNote.suggestion })
  }

  const CloseModal = () => {
    return setShowModal(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
    updateNote(enote.id, enote.ename, enote.esuggestion);
    console.log(setENote)
  }

  const MyModal = () => {
    return (
      <>
        <div className="modalWrapper" onClick={CloseModal}></div>
        <div className="modalContainer">
          <div className='editContainer'>
            <form action="" onSubmit={handleSubmit} >
              <div className="eName">
                <label htmlFor="name">Name</label><br />
                <input className='inputs' type="text" name="ename" id="ename" onChange={onChange} value={enote.ename} />
              </div>
              <div className="eSuggestion">
                <label htmlFor="suggestion">Suggestion</label><br />
                <input className='inputs' type="text" name="esuggestion" id="esuggestion" onChange={onChange} value={enote.esuggestion} />
              </div>
              <button className='modalBtn' disabled={enote.ename.length < 5 || enote.esuggestion.length < 5} >Update Comment</button>
            </form>
          </div>
          <div className="notes"></div>
        </div>
      </>
    )
  }

  return (
    <div className='notesItem'>
      <div className="commentContainer">
        <div className="nameItem">{note.name}</div>
        <div className="suggestionItem">{note.suggestion}</div>
      </div>
      <div className="fonts">
        <div className="AiFillDelete">
          <AiFillDelete size={20} onClick={() => { deleteNote(note.id) }} />
        </div>
        <div className="FiEdit">
          <FiEdit size={18} onClick={() => { setShowModal(true); editNote(note) }} />
        </div>
        {showModal && <MyModal />}
      </div>
    </div>
  )
}

export default NotesItem;
