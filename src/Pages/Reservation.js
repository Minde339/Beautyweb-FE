import React from "react";
import { Container, Form, Row, Col } from "react-bootstrap";

export default function Reservation() {
  return (
    <Container>
      <Form>
        <Row>
          <Col xs={6}>
            <Form.Label>Vardas</Form.Label>
            <Form.Control placeholder="Vardas" />
          </Col>
          <Col xs={6}>
            <Form.Label>Pavardė</Form.Label>
            <Form.Control placeholder="Pavardė" />
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
