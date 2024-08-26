import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ContactItem = () => {
  return (
    <div>
      <Row>
        <Col lg={1}>
          <img
            width={50}
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg'
            alt='unknown-person-jpg'
          ></img>
        </Col>
        <Col lg={11}>
          <div>김빛나</div>
          <div>012345678</div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactItem;
