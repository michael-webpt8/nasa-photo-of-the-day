import React, { useState, useEffect } from 'react';
import { NasaApi } from './components/Nasa-api';
import NasaComponent from './components/NasaComponent';
import { Spinner } from 'reactstrap';
import styled from 'styled-components';

import './App.css';

function App() {
  useEffect(() => {
    //NasaApi(setPhotoOfTheDay);
  }, []);
  const [photoOfTheDay, setPhotoOfTheDay] = useState();
  console.log(photoOfTheDay);
  if (!photoOfTheDay)
    return (
      <SpinWrapper>
        <SpinLoader color="primary" />
        <h2>Loading...</h2>
      </SpinWrapper>
    );

  return <NasaComponent photoOfTheDay={photoOfTheDay} />;
}

export default App;

const SpinWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const SpinLoader = styled(Spinner)`
  text-align: center;
  margin-top: 25px;
  height: 5rem;
  width: 5rem;
`;
