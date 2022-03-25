import React, { useState, useEffect} from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList'
import './App.css';

function App() {
  
  const [galleryList, setGalleryList] = useState([]);
  
  //On load, get Gallery
  useEffect(() => {
    getGalleryItems()
  }, [])

  const getGalleryItems = () => {
    axios.get('/gallery')
    .then(response => {
        console.log('GET response:', response.data);
        setGalleryList(response.data);
    })
    .catch(err => {
        console.log('error in GET')
        console.log(err);
    })
  }

  // update gallery item like count
  const updateLikes = () => {

  }
  
  return (
      <div>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Gallery of My Life</h1>
          </header>
          < GalleryList 
            galleryList = {galleryList}
          />
      </div>
    </div>
    );
}

export default App;
