import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from 'axios';
import NoteForm from "./componenet/NoteForm";
import NoteList from "./componenet/NoteList";
import './App.css';
import { BASE_URL } from "./Constant";

// Home Component
const Home = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get(BASE_URL + "/Viewnotes");
        setNotes(response.data);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };
    fetchNotes();
  }, []);
  

  return (
    <div className="card-container">
      <div className="cookie-card">
        <div className="card-body">
          <h2 className="card-title">Note Taking Web-Site!</h2>
          <div className="card-actions">
            <Link to="/notes">
              <button className="btn btn-primary">View Notes</button>
            </Link>
            <Link to="/add-note">
              <button className="btn btn-ghost">Add Note</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  return (
    <div className="app">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<NoteList notes={notes} />} />
        <Route path="/add-note" element={<NoteForm onAddNote={addNote} />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
