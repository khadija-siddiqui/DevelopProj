import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import NotesComp from "./NotesComp";
//Implement the add note functionality.
//Steps :
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add a new note to an array.
//- Take array and render separate Note components for each item.

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass an id over to the Note component, pass it back to the App when deleting.

function App() {
  //state hook to track list of notes
  const [notesList, setNList] = useState(notes);

  //add functionality for note
  function addNote(newNote) {
    //const trackcontent = {
    //title: title,
    //content: content,
    //};
    setNList((prevN) => prevN.concat(newNote));
  }

  //delete functionality for note
  //filter func - filter out what needs to be deleted
  function delNote(id) {
    setNList((prevN) => {
      return prevN.filter((note, index) => index !== id);
    });
  }

  //edit functionality for note 
  function editNote(id, editedTitle, editedContent){
    setNList((prevN) => 
      prevN.map((note, index) => {
        if (index === id) {
          return {...note, title: editedTitle, content: editedContent};
        }
        return note;
      })
    );
  }

  const renderNotes = () => {
    return notesList.map((note, index) => (
      <Note
        key={index}
        id={index}
        title={note.title}
        content={note.content}
        onEdit={editNote}
        onDelete={delNote}
      />
    ));
  };

  return (
    <div>
      <Header />
      <NotesComp onAdd={addNote} />
      {renderNotes()}
      <Footer />
    </div>
  );
}

export default App;
