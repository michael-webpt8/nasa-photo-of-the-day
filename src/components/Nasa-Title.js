import React from 'react';

function NasaTitle(props) {
  if (!props.photoOfTheDay) return <h2>Loading Photo...</h2>;

  const { photoOfTheDay } = props;
  const title = photoOfTheDay.title;
  return (
    <>
      <h2>{title}</h2>
    </>
  );
}
export default NasaTitle;
