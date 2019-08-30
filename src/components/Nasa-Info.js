import React from 'react';
import styled from 'styled-components';

export function NasaExplanationInfo(props) {
  const { photoOfTheDay } = props;
  const explanation = photoOfTheDay.explanation;
  return (
    <>
      <Explanation>{explanation}</Explanation>
    </>
  );
}

const Explanation = styled.p`
  background-color: ghostwhite;
  padding: 15px;
  border-radius: 10px;
  opacity: 0.7;
  color: black;
`;
