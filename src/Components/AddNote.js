import React,{useContext, useState}from 'react'
import noteContext from '../context/notes/noteContext';


const AddNote = (props) => {
    const context=useContext(noteContext);
    const {addNote} = context;
    const [note,setNote]=useState({title : "",description :"",tag:""});
    const handleClick =(e)=>{
        console.log("Submitted");
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
        props.showAlert("Note added successfully","success")
        setNote({title : "",description :"",tag:""});
    }
    const onChange=(e)=>{
        setNote({...note, [e.target.name]:e.target.value})
    }
  return (
    <div>
      <div className="container my-3">
        <h2>Add a Note</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={onChange}
              minLength={5}
              required
              value={note.title}
            />
            
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={onChange}
              minLength={5}
              required
              value={note.description}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              onChange={onChange}
              value={note.tag}
            />
          </div>
          <button disabled={note.title.length<5 || note.description.length <5} type="submit" onClick={handleClick} className="btn btn-primary">
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
