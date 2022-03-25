import React, { useState, useEffect} from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList'
import './App.css';

function App() {
  //On load, get students
  useEffect(() => {
    getGalleryItems()
  }, [])

  const getGalleryItems = () => {
    axios.get('/gallery')
    .then(response => {
        console.log('GET response:', response.data);
        setStudentList(response.data);
    })
    .catch(err => {
        console.log('error in GET')
        console.log(err);
    })
}
  
  return (
      <div>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Gallery of My Life</h1>
          </header>
          <p>Gallery goes here</p>
          <img src="images/goat_small.jpg"/>
        </div>
        <div>
          < GalleryList/>
        </div>
      </div>
    );
}

export default App;
