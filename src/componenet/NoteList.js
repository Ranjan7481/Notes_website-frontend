import React from 'react';
import { Link } from 'react-router-dom';
import './NoteList.css'

const NoteList = ({ notes }) => {
    return (
            <div className='parent'>
            <div className='note-list container'>
            <h2 className='heading'>Notes</h2>
            
            {notes.length > 0 ? (
                <>
                    <ul>
                        {notes.map((note) => (
                            <li key={note.id}>
                                <h2 className='title'>{note.title}</h2>
                                <h3 className='description'>{note.description}</h3>
                            </li>
                        ))}
                    </ul>
                    <Link to="/add-note">
                        <h4 className='add'>Add Another Note</h4>
                    </Link>
                </>
            ) : (
                <>
                    <h3 className='no-notes'>No notes available. Please add your first note!</h3>
                    <Link to="/add-note">
                        <h4 className='add'>Add Note</h4>
                    </Link>
                </>
            )}

            <Link to="/">
                <h4 className='back'>Back to Home</h4>
            </Link>
        </div>
        </div>
    );
};

export default NoteList;
