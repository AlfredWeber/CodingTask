import React, { Component } from "react";
import { Card, Col, Container, Row, FormControl } from "react-bootstrap";

class Api extends Component {
  constructor(props) {
    super(props);
    const urls = ["https://swapi.dev/api/people/"];
    this.state = { urls, starWarsData: [], filterData: [] };
  }

  async componentDidMount() {
    console.log("mount triggered!");
    try {
      const resp = await Promise.all(
        this.state.urls.map((url) =>
          fetch(url).then((response) => response.json())
        )
      );
      this.setState({
        starWarsData: resp[0].results,
        filterData: resp[0].results,
      });
    } catch (error) {
      console.log("Ups something went wrong: ", error);
    }
  }

  render() {
    const filter = (searchText) => {
      if (searchText.length < 3) {
        this.setState({
          filterData: this.state.starWarsData,
        });
        return;
      }
      this.setState({
        filterData: this.state.starWarsData.filter((item) => {
          return (
            item.name.toLowerCase().includes(searchText.toLowerCase()) ||
            item.gender.toLowerCase().includes(searchText.toLowerCase())
          );
        }),
      });
    };

    return (
      <div className="mt-5 mb-5 main">
        <Container>
          <FormControl
            className="searchBar"
            type="text"
            placeholder="Search..."
            onChange={(e) => filter(e.target.value)}
          />
          <Row className="text-center">
            {this.state.filterData.map((item) => {
              return (
                <Col
                  key={item.name + item.birth_year}
                  xs={12}
                  sm={12}
                  md={6}
                  lg={4}
                  as="a"
                  href={item.url}
                  className="twitchCard bg-dark"
                >
                  <div className="avatar">
                    <img
                      src={"./starWars/StarWars.png"}
                      className="cardImage"
                      alt=""
                    />
                  </div>
                  <Card>
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>
                        {item.gender} | Hair: {item.hair_color} | Eyes:{" "}
                        {item.eye_color} | {item.height}cm | {item.mass}kg
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Api;
