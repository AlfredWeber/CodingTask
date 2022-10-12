import React, { Component } from "react";
import { Col, Row, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";

class FooterComp extends Component {
  render() {
    return (
      <div className="footer bg-dark">
        <Container fluid>
          <Row>
            <Col className="FooterLogo" xs={12} sm={12} md={4} lg={4}>
              <img
                alt=""
                src="logo/logo.png"
                width="150"
                height="120"
                className="d-inline-block align-top"
              />
            </Col>
            <Col className="FooterNavigationBar" xs={12} sm={12} md={4} lg={4}>
              <Nav.Link as={Link} to={"/home"}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/api"}>
                API
              </Nav.Link>
              <Nav.Link as={Link} to={"/about"}>
                About
              </Nav.Link>
            </Col>
            <Col className="FooterContactInfo" xs={12} sm={12} md={4} lg={4}>
              <span>
                <img
                  alt=""
                  src="icons/user.svg"
                  width="21"
                  height="21"
                  className="iconSpacer"
                />
                <span>Alfred Weber</span>
              </span>
              <span>
                <img
                  alt=""
                  src="icons/street.svg"
                  width="21"
                  height="21"
                  className="iconSpacer"
                />
                <span>Musterstraße 123</span>
              </span>
              <span>
                <img
                  alt=""
                  src="icons/phone.svg"
                  width="21"
                  height="21"
                  className="iconSpacer"
                />
                <span>0157 42 42 42</span>
              </span>
              <span>
                <img
                  alt=""
                  src="icons/email.svg"
                  width="21"
                  height="21"
                  className="iconSpacer"
                />
                <span>alfred28@gmx.at</span>
              </span>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default FooterComp;
