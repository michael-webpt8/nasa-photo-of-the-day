import React, { useState, useEffect } from 'react';
import { NasaApi } from './components/Nasa-api';
import NasaPhoto from './components/Nasa-Photo';
import './App.css';

// data.explanation => info
// data.data => 2019-08-27
// data.hdurl => hi def image
// data.title => image title (uses for alt on image)
// data.url => url regular def image (probably will use this one)...

function App() {
  useEffect(() => {
    NasaApi(setPhotoOfTheDay);
  }, []);
  const [photoOfTheDay, setPhotoOfTheDay] = useState();
  console.log(photoOfTheDay);
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <NasaPhoto photoOfTheDay={photoOfTheDay} />
    </div>
  );
}

export default App;
