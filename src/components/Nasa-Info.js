import React from 'react';

export function NasaExplanationInfo(props) {
  if (!props.photoOfTheDay) return <h3>Loading....</h3>;
  const { photoOfTheDay } = props;
  const explanation = photoOfTheDay.explanation;
  return (
    <>
      <p>{explanation}</p>
    </>
  );
}
