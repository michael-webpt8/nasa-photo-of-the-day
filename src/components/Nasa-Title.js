import React from 'react';
import styled from 'styled-components';

function NasaTitle(props) {
  const { photoOfTheDay } = props;
  const title = photoOfTheDay.title;
  return (
    <>
      <TitleH2>{title}</TitleH2>
    </>
  );
}
export default NasaTitle;

const TitleH2 = styled.h2`
  text-align: center;
  margin-top: 35px;
  margin-bottom: 20px;
`;
