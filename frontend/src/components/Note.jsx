import React, { useState } from "react";

function Note(props) {
  const [isEdit, setEdit] = useState(false);
  const [editTitle, setEditTitle] = useState(props.title);
  const [editContent, setEditContent] = useState(props.content); // Fixed typo: 'cosnt' to 'const'

  function handleEditClick() {
    setEdit(true);
  }

  function handleSaveClick() {
    props.onEdit(props.id, editTitle, editContent);
    setEdit(false);
  }

  function handleTitleChange(event) {
    setEditTitle(event.target.value);
  }

  function handleContentChange(event) {
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

