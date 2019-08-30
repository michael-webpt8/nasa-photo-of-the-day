import React from 'react';

import NasaPhoto from './Nasa-Photo';
import NasaTitle from './Nasa-Title';
import { NasaExplanationInfo } from './Nasa-Info';
import { Container, Row, Col } from 'reactstrap';

function NasaComponent(props) {
  const { photoOfTheDay } = props;
  return (
    <Container>
      <Row>
        <Col sm="12">
          <NasaTitle photoOfTheDay={photoOfTheDay} />
        </Col>
      </Row>
      <Row>
        <Col sm="12" md="6">
          <NasaPhoto photoOfTheDay={photoOfTheDay} />
        </Col>
        <Col sm="12" md="6">
          <NasaExplanationInfo photoOfTheDay={photoOfTheDay} />
        </Col>
      </Row>
    </Container>
  );
}
export default NasaComponent;
