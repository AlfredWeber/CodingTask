import React, { Component } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";

class NavbarComp extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container fluid>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="logo/logo.png"
                width="50"
                height="50"
                className="d-inline-block align-top"
              />{" "}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#service">Service</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavbarComp;
