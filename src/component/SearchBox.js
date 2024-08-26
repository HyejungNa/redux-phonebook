import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const SearchBox = () => {
  return (
    <div>
      <Row>
        <Col lg={10}>
          <Form.Control type='text' placeholder='Enter your name' />
        </Col>
        <Col lg={2}>
          <Button>Find</Button>
        </Col>
      </Row>
    </div>
  );
};

export default SearchBox;
