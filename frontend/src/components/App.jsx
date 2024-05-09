import React, { useState, useEffect} from "react";
import axios from "axios";
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
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    axios
    .get("http://localhost:8000/notes")
    .then((res) => {
      console.log(res.data);
      setNList(res.data);
    })
    .catch((err) => console.error(err));
  }, []);


  const addNote = () => {
    axios
      .post("http://localhost:8000/notes", { title, content })
      .then((res) => {
        console.log("Note added - ", res.data);
        setNList([...notesList, res.data]);
        setTitle("");
        setContent("");
      })
      .catch((err) => console.log(err));
  };


  const updateNote = (id, updatedTitle, updatedContent) => {
    axios
      .patch(`http://localhost:8000/notes/${id}`, {
          title: updatedTitle,
          content: updatedContent,
        })
      .then((res) => {
        console.log(res.data);
        const updatedNotes = notesList.map((note) =>
          note._id === id
            ? { ...note, title: updatedTitle, content: updatedContent }
            : note
        );
        setNList(updatedNotes);
      })
      .catch((err) => console.log(err));
  };

  const deleteNote = (id) => {
    axios
      .delete(`http://localhost:8000/notes/${id}`)
      .then((res) => {
        console.log(res.data);
        setNList(notesList.filter((note) => note._id !== id));
      })
      .catch((err) => console.log(err));
  };


  const renderNotes = () => {
    return notesList && notesList.map((note) => (
      <Note
        key={note._id}
        id={note._id}
        title={note.title}
        content={note.content}
        onDelete={() => deleteNote(note._id)}
        onEdit={updateNote}
      />
    ));
  };

  return (
    <div>
      <Header />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addNote();
        }}
        className="form"
      >
        <input
          className="block shadow w-full mx-auto px-2 py-2 my-2 rounded-lg"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          type="text"
          placeholder="Title"
        />
        <textarea
          placeholder="Write your note here..."
          rows={4}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          type="text"
          className="block shadow w-full mx-auto my-2 px-2 py-4 rounded-lg"
        />
        <button type="submit" className="button">
          +
        </button>
      </form>
      <div className="grid-container">{renderNotes()}</div>
      <Footer />
    </div>
  );
}

export default App;