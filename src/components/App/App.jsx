import React from 'react';
import GalleryList from '../GalleryList/GalleryList'
import './App.css';

function App() {
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
