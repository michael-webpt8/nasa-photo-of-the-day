import React from 'react';

function NasaPhoto(props) {
  if (!props.photoOfTheDay) return <h3>Loading...</h3>;

  const { photoOfTheDay } = props;
  const photo = photoOfTheDay.url;
  const altText = photoOfTheDay.title;
  console.log('photo url', photo);
  return (
    <>
      <img src={photo} alt={altText} />
    </>
  );
}
export default NasaPhoto;
