import React, { Component } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

class MainComp extends Component {
  render() {
    return (
      <div className="mt-5">
        <Container style={{ backgroundColor: "lightgrey" }}>
          <Row>
            <Col>
              <Card>
                <Card.Img variant="top" src="./logo/logo.png" height={150} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>Brand</Col>
            <Col>C</Col>
          </Row>
          <Row>
            <Col>D</Col>
            <Col>E</Col>
            <Col>F</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MainComp;
