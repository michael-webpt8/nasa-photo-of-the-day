import React from 'react';

export function NasaExplanationInfo(props) {
  const { photoOfTheDay } = props;
  const explanation = photoOfTheDay.explanation;
  return (
    <>
      <p>{explanation}</p>
    </>
  );
}
