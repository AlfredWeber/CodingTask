import React, { Component } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

class MainComp extends Component {
  render() {
    return (
      <div className="mt-5">
        <Container style={{ backgroundColor: "lightgrey" }}>
          <Row className="text-center bg-dark">
            <Col
              as="a"
              href="https://www.twitch.tv/summit1g"
              className="twitchCard"
            >
              <div className="avatar">
                <img
                  src="./twitchLogos/Summit1G.png"
                  className="cardImage"
                  alt=""
                />
              </div>
              <Card>
                <Card.Body>
                  <Card.Title>Summit1G</Card.Title>
                  <Card.Text>Summit1G is a variety Streamer!</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col
              as="a"
              href="https://www.twitch.tv/broxah"
              className="twitchCard"
            >
              <div className="avatar">
                <img
                  src="./twitchLogos/Broxah.png"
                  className="cardImage"
                  alt=""
                />
              </div>
              <Card>
                <Card.Body>
                  <Card.Title>Broxah</Card.Title>
                  <Card.Text>
                    Broxah is ex-professional League of Legends player streaming
                    on Twitch!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col
              as="a"
              href="https://www.twitch.tv/riotgames"
              className="twitchCard"
            >
              <div className="avatar">
                <img
                  src="./twitchLogos/RiotGames.png"
                  className="cardImage"
                  alt=""
                />
              </div>
              <Card>
                <Card.Body>
                  <Card.Title>Riot Games</Card.Title>
                  <Card.Text>The offical Riot Games Twitch Stream!</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="text-center bg-dark">
            <Col
              as="a"
              href="https://www.twitch.tv/nasa"
              className="twitchCard"
            >
              <div className="avatar">
                <img
                  src="./twitchLogos/Nasa.png"
                  className="cardImage"
                  alt=""
                />
              </div>
              <Card>
                <Card.Body>
                  <Card.Title>NASA</Card.Title>
                  <Card.Text>The offical NASA Twitch Stream!</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col as="a" href="https://www.twitch.tv/xqc" className="twitchCard">
              <div className="avatar">
                <img src="./twitchLogos/xqc.png" className="cardImage" alt="" />
              </div>
              <Card>
                <Card.Body>
                  <Card.Title>xQc</Card.Title>
                  <Card.Text>xQc is a variety Streamer!</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col
              as="a"
              href="https://www.twitch.tv/x2pac_thuglord"
              className="twitchCard"
            >
              <div className="avatar">
                <img
                  src="./twitchLogos/x2pac.png"
                  className="cardImage"
                  alt=""
                />
              </div>
              <Card>
                <Card.Body>
                  <Card.Title>x2Pac_ThuGLorD</Card.Title>
                  <Card.Text>
                    x2Pac_ThuGLorD is a professional Call Of Duty player
                    streaming on Twitch!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MainComp;
