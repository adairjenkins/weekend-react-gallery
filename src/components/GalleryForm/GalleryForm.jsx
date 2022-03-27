import { useState } from 'react';
import axios from 'axios';

function GalleryForm({getGalleryItems}) {

    const [artist, setArtist] = useState('');
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [path, setPath] = useState('');    

    const addGalleryItem = (evt) => {
        console.log('addGalleryItem func');
        evt.preventDefault();
        
        axios.post('/gallery', {
            artist: artist,
            title: title, 
            date: date,
            path: path
        })
        .then( response => {
            getGalleryItems();
            // clear input
            setArtist('');
            setTitle('');
            setDate('');
            setPath('');
        })
        .catch( err => {
            console.log(err);
        })
    }
    
    return (
        <form onSubmit={addGalleryItem}>
            <label>Artist:</label>
                <input onChange={evt => setArtist(evt.target.value)} value={artist}/>
            <label>Title:</label>
                <input onChange={evt => setTitle(evt.target.value)} value={title}/>
            <label>Year:</label>
                <input onChange={evt => setDate(evt.target.value)} value={date}/>
            <label>URL:</label>
                <input onChange={evt => setUrl(evt.target.value)} value={path}/>
            <button type="submit">Add</button>
        </form>
    )
}

export default GalleryForm;