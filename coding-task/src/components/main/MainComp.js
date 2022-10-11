import React, { Component } from "react";
import { Card, Col, Container, Row, FormControl } from "react-bootstrap";

class MainComp extends Component {
  constructor(props) {
    super(props);
    const data = [
      {
        id: 1,
        link: "https://www.twitch.tv/summit1g",
        logo: "./twitchLogos/Summit1G.png",
        title: "Summit1G",
        text: "Summit1G is a variety Streamer!",
      },
      {
        id: 2,
        link: "https://www.twitch.tv/broxah",
        logo: "./twitchLogos/Broxah.png",
        title: "Broxah",
        text: "Broxah is ex-professional League of Legends player streaming on Twitch!",
      },
      {
        id: 3,
        link: "https://www.twitch.tv/riotgames",
        logo: "./twitchLogos/RiotGames.png",
        title: "Riot Games",
        text: "The offical Riot Games Twitch Stream!",
      },
      {
        id: 4,
        link: "https://www.twitch.tv/nasa",
        logo: "./twitchLogos/Nasa.png",
        title: "NASA",
        text: "The offical NASA Twitch Stream!",
      },
      {
        id: 5,
        link: "https://www.twitch.tv/xqc",
        logo: "./twitchLogos/xqc.png",
        title: "xQc",
        text: "xQc is a variety Streamer!",
      },
      {
        id: 6,
        link: "https://www.twitch.tv/x2pac_thuglord",
        logo: "./twitchLogos/x2pac.png",
        title: "x2Pac_ThuGLorD",
        text: "x2Pac_ThuGLorD is a professional Call Of Duty player streaming on Twitch!",
      },
    ];
    this.state = { data, filterData: [...data] };
  }

  render() {
    // Filter Function
    const filter = (searchText) => {
      if (searchText.length < 3) {
        this.setState({
          filterData: this.state.data,
        });
        return;
      }
      this.setState({
        filterData: this.state.data.filter((item) => {
          return (
            item.title.toLowerCase().includes(searchText.toLowerCase()) ||
            item.text.toLowerCase().includes(searchText.toLowerCase())
          );
        }),
      });
    };

    return (
      <div className="mt-5 mb-5 main">
        <Container>
          <FormControl
            type="text"
            placeholder="Search..."
            onChange={(e) => filter(e.target.value)}
          />
          <br></br>
          <Row className="text-center">
            {this.state.filterData.map((item) => {
              return (
                <Col
                  key={item.id}
                  xs={12}
                  sm={12}
                  md={6}
                  lg={4}
                  as="a"
                  href={item.link}
                  className="twitchCard bg-dark"
                >
                  <div className="avatar">
                    <img src={item.logo} className="cardImage" alt="" />
                  </div>
                  <Card>
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.text}</Card.Text>
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

export default MainComp;
