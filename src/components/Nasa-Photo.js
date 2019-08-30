import React from 'react';
import styled from 'styled-components';

function NasaPhoto(props) {
  const { photoOfTheDay } = props;
  const photo = photoOfTheDay.url;
  const altText = photoOfTheDay.title;

  return (
    <>
      <ImgWrapper src={photo} alt={altText} />
    </>
  );
}
export default NasaPhoto;

const ImgWrapper = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 30px;
`;
