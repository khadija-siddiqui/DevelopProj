import React, { useState } from "react";
//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.

function Note(props) {
  const [isEdit, setEdit] = useState(false);
  const [editTitle, setEditTitle] = useState(props.title);
  cosnt [editContent, setEditContent] = useStat(props.content);

  function handleEditClick(){
    setEdit(true);
  }

  function handleSaveClick(){
    props.onEdit(props.id, editTitle, editContent);
    setEdit(false);
  }

  function handleTitleChange(event) {
    setEditTitle(event.target.value);
  }

  function handleContentChange(event){
    setEditContent(event.target.value);
  }

  function handleDeleteClick() {
    props.onDelete(props.id);
  }


  return (
    <div className="note">
      {isEdit ? (
        <div>
          <input
            type="text"
            value={editTitle}
            onChange={handleTitleChange}
          />
          <textarea
            value={editContent}
            onChange={handleContentChange}
          ></textarea>
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <div>
          <h1>{props.title}</h1>
          <p>{props.content}</p>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={handleDeleteClick}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default Note;
