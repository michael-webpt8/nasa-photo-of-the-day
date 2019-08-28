import React, { useState, useEffect } from 'react';
import { NasaApi } from './components/Nasa-api';
import NasaPhoto from './components/Nasa-Photo';
import NasaTitle from './components/Nasa-Title';
import { NasaExplanationInfo } from './components/Nasa-Info';
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

  return (
    <div className="App">
      <NasaTitle photoOfTheDay={photoOfTheDay} />
      <NasaPhoto photoOfTheDay={photoOfTheDay} />
      <NasaExplanationInfo photoOfTheDay={photoOfTheDay} />
    </div>
  );
}

export default App;
