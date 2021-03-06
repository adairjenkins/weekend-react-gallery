import React, { useState, useEffect} from 'react';
import axios from 'axios';
import GalleryForm from '../GalleryForm/GalleryForm';
import GalleryList from '../GalleryList/GalleryList';
import './App.css';

function App() {
  
  const [galleryList, setGalleryList] = useState([]);
  
  //On load, get Gallery
  useEffect(() => {
    getGalleryItems();
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
  const updateLikeCount = (id) => {
    console.log('updateLikeCount func');
    axios.put(`/gallery/like/${id}`)
    .then( response => {
      console.log('updated likes for id#', id);
      console.log(response);
      getGalleryItems();
    })
    .catch( error => {
      console.log(error)
    })
  }

  // delete item
  const deleteItem = (id) => {
    console.log('deleteItem func');
    axios.delete(`/gallery/${id}`)
    .then( response => {
      console.log('item deleted');
      getGalleryItems();
    }).catch(function(err) {
      console.log(err);
    })
  }
  
  return (
      <div>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Gallery</h1>
          </header>
          < GalleryForm
            getGalleryItems={getGalleryItems}
          />
          < GalleryList 
            galleryList = {galleryList}
            updateLikeCount = {updateLikeCount}
            deleteItem = {deleteItem}
          />
      </div>
    </div>
    );
}

export default App;
