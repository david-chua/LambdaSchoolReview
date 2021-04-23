import React, { useState } from "react";
import ReactDOM from "react-dom";
import Notes from "./components/Notes";
import NoteForm from "./components/NoteForm";
//mimic fetching data from an API
import data from "./data";
import './App.css';

function App() {
  // all of our notes will live in state as 'notes'
    // we are prepopulated a note inside of notes as a note object in [] set as initial state
    const [notes, setNotes] = useState([
      {
        id: 1,
        title: "Happy little quote",
        body:
          "Talent is a pursued interest. Anything that you're willing to practice, you can do.― Bob Ross "
      }
    ]);

    // Step 6: Create function that will update 'notes' with param values passed
    // note is a parameter. we're passing "note" state from NoteForm into this func onSubmit
    const addNewNote= note => {
      const newNote = {
        id: Date.now(),
        title: note.title,
        body: note.body
      }

      setNotes([...notes, newNote]);
    }


      // DO NOT(E) DO:
      // bad code: notes.append(newNote) ; can't change state! read only!
      // also bad code: setNotes(notes.append(newNote)) : still tries to change state! still bad!

    return (
      <div className="App">
        <h1>My Notes</h1>
        {/* Step 7: Pass addNewNote as a prop into NoteForm */}
        <NoteForm addNewNote={addNewNote} title="Default title"/>
        <Notes notes={notes} />
      </div>
    );
}

export default App;
