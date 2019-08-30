import React from 'react';
import styled from 'styled-components';

function NasaTitle(props) {
  const { photoOfTheDay } = props;
  const title = photoOfTheDay.title;
  return (
    <>
      <NasaH1>NASA Image of the Day</NasaH1>
      <TitleH2>{title}</TitleH2>
    </>
  );
}
export default NasaTitle;

const NasaH1 = styled.h1`
  text-align: center;
  margin-top: 20px;
  padding: 10px;
`;

const TitleH2 = styled.h2`
  text-align: center;
  margin-top: 25px;
  margin-bottom: 20px;
`;
