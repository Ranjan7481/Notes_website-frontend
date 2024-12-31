import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import './NoteForm.css';
import { BASE_URL } from '../Constant';


const NoteForm = ({ onAddNote }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !description) return alert('Title and Description are required');
        
        try {
            const response = await axios.post(BASE_URL + "/Addnotes", { title, description });

            onAddNote(response.data);
            setTitle('');
            setDescription('');
            navigate('/notes'); // Redirect to notes list after adding
        } catch (error) {
            console.error('Error adding note:', error);
        }
    };

    return (

        <div className="note-form-container">
        <form
        className='form-box'
         onSubmit={handleSubmit}>
            <input
            className='title'
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
            className='text'
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit" className='Add-bottom'>Add Note</button>
                       

        </form>
        <Link to="/"><h4 className='Back'>Back to Home</h4></Link>

        </div>
                  

        
    );
};

export default NoteForm;
