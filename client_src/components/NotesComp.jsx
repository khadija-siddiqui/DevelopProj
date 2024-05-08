import React, { useState } from "react";

//NotesComp -a form for users to input their note info
//functional comp which takes onAdd as its parmeter
function NotesComp(props) {
  const [note, setNote] = useState({
    //state var 'note' to manage the input values for note
    //using 'useState as hook to initalize and update state
    //initialized with empty strings:
    title: "",
    content: "",
  });

  //change function to hande changes in input fields of form
  //updates the 'note' state w/ new values user entered
  function change(event) {
    const { name, value } = event.target;
    //calles 'setNote' to update 'note' state
    //ensures state updates based on prev state
    setNote((prevNote) => {
      //returns with updated property
      return Object.assign({}, prevNote, {
        [name]: value,
      });
    });
  }

  //handles submission of form
  //needed to add note to application state & reset form
  function submit(event) {
    props.onAdd(note);
    setNote({
      //resets 'note' state to an obj w empty strings:
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={change}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={change}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submit}>Add</button>
      </form>
    </div>
  );
}

export default NotesComp;
