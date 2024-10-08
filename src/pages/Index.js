import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/index.css";
import image1 from "../images/image1.jpeg";
import { Visible, Hidden } from "react-grid-system";

import fencingpic8 from "../images/fencingpic8.jpg";
import fencingpic6 from "../images/fencingpic5.jpg";
import callout from "../images/callout2.png";
import callout1 from "../images/Lunge group.png";

import uprightfoil from "../images/uprightfoil2.png";
import foildivider from "../images/foildivider1.png";
import rightsaber from "../images/rightsaber1.png";
import rightfoil from "../images/rightfoil.png";
import chicago from "../images/chicago.png";
import ohio from "../images/ohio.png";
import iu from "../images/iu.png";
import notredame from "../images/notredame.png";
import cleveland from "../images/cleveland.png";
import northwestern from "../images/northwestern.png";
import michigan from "../images/michigan.png";
import wayne from "../images/wayne.png";
import { right } from "@popperjs/core";

const Index = () => (
  <>
    {/* General notes about this page: Nothing too special going on with this page. I originally just wanted a longer 
    page split up by sections with a header, picture, and a paragraph or so. I figured this page should have club-specific
    information rather than fencing specific, hence the universities we've competed, where members are from, etc. 
    I also think that we should somehow emphasize the fact that we are open to complete beginners and encourage
    beginners to join. I think it's worth stating somewhere that a lot of our own competitive fencers started 
    in college. */}
    <Header></Header>
    <br />
    <div>
      <Container className="home-intro fencing-body">
        {/* TODO: wrap each body section in a reveal library for moving parts */}
          <Row>
            <Hidden xs sm md>
              <Col>
                <img src={rightfoil} width="100%" />
              </Col>
            </Hidden>
            <Col>
              <h1 className="text-center">Welcome to Purdue Fencing!</h1>
              <Visible xs sm md>
                <br />
                <hr />
              </Visible>
            </Col>
            <Hidden xs sm md>
              <Col>
                <img
                  src={rightsaber}
                  className="divider-rotate-180"
                  width="100%"
                />
              </Col>
            </Hidden>
          </Row>
          <br />
          <br />
          <Row xs={1} md={2}>
            <Col>
              <img src={fencingpic6} width="100%" />
            </Col>
            <Col>
              <h2>The Official Fencing Club of Purdue University</h2>
              <br />
              <p className="fencing-text">
                Purdue Fencing Club is a co-ed club sports team. We are proud to
                represent Purdue at collegiate tournaments with men and women
                squads for foil, epee, and saber. We provide experiences in
                fencing, competition, and camaraderie to all Boilermakers who
                show interest.
              </p>
            </Col>
          </Row>
        {/* Quick note, I'm using breaks for quick spacing so I don't have to add more CSS, but this will get changed */}
        <Hidden xs>
          <br />
          <br />
          <br />
        </Hidden>
        <hr />
        <Hidden xs>
          <br />
          <br />
          <br />
        </Hidden>
          <Row xs={1} md={2}>
            <Col>
              <h1>Open to All Skill Levels</h1>
              <h2>Beginners (and fencing masters) welcome!</h2>
              <br />
              <p className="fencing-text">
                The Purdue Fencing club welcomes anyone regardless of skill
                level. If you're new and want to give fencing a try, we hold a
                beginner's class to teach the basics of all three disciplines of
                fencing. The class is instructed by our own members. We had a
                great time at our first beginner's class this year!
              </p>
            </Col>
            <Col>
              <img src={callout1} width="100%" />
            </Col>
          </Row>
        <Hidden xs>
          <br />
          <br />
          <br />
        </Hidden>
        <Visible xs>
          <br />
          <br />
        </Visible>
        <hr />
        <Hidden xs>
          <br />
          <br />
          <br />
        </Hidden>
        <Visible xs>
          <br />
          <br />
        </Visible>
        <Hidden xs>
        </Hidden>
          <div className="university-header">
            <Row>
              <Hidden xs sm md>
                <Col>
                  <img src={rightfoil} width="100%" />
                </Col>
              </Hidden>
              <Col>
                <h2 className="text-center">
                  Some Universities We've Competed With
                </h2>
                <Visible xs sm md>
                  <br />
                </Visible>
              </Col>
              <Hidden xs sm md>
                <Col>
                  <img
                    src={rightsaber}
                    className="divider-rotate-180"
                    width="100%"
                  />
                </Col>
              </Hidden>
            </Row>
          </div>
          <br />
          <br />
          <br />
          <Container className="universities">
            <Row xs={2} md={2} lg={4}>
              <Col className="d-flex justify-content-center">
                <Image src={chicago} className="uni-logo" />
              </Col>
              <Col className="d-flex justify-content-center">
                <img src={ohio} className="uni-logo" />
              </Col>
              <Col className="d-flex justify-content-center">
                <img src={iu} className="uni-logo" />
              </Col>
              <Col className="d-flex justify-content-center">
                <img src={notredame} className="uni-logo" />
              </Col>
              <Hidden xs sm>
                <Col className="d-flex justify-content-center">
                  <Image src={wayne} className="uni-logo" />
                </Col>
                <Col className="d-flex justify-content-center">
                  <Image src={michigan} className="uni-logo" />
                </Col>
                <Col className="d-flex justify-content-center">
                  <img src={cleveland} className="uni-logo" />
                </Col>
                <Col className="d-flex justify-content-center">
                  <img src={northwestern} className="uni-logo" />
                </Col>
              </Hidden>
            </Row>
          </Container>
        <br />
        <br />
        <br />
        <br />
        <hr></hr>
        <br />
        <Container>
          <Row>
            <Hidden xs sm md>
              <Col>
                <img src={rightfoil} width="100%" />
              </Col>
            </Hidden>
            <Col>
              <h2 className="text-center">Practice Schedule Fall 2025</h2>
              <Visible xs sm md>
                <br />
              </Visible>
            </Col>
            <Hidden xs sm md>
              <Col>
                <img
                  src={rightsaber}
                  className="divider-rotate-180"
                  width="100%"
                />
              </Col>
            </Hidden>
          </Row>
          <br />
          <br />
          <Container className="home-calendar text-center">
            <p className="fencing-header">
              All practices are in MP Room 5 of the Co-Rec.
            </p>
            <br />
            <br />
            <Row xs={3}>
              <Col>
                <p className="fencing-header">TUE</p>
                <p className="fencing-subheader">9:00pm - 11:45pm</p>
              </Col>
              <Col>
                <p className="fencing-header">THUR</p>
                <p className="fencing-subheader">9:00pm - 11:45pm</p>
              </Col>
              <Col>
                <p className="fencing-header">SAT</p>
                <p className="sunday-subheader">*Open Fencing</p>
                <p className="fencing-subheader">12:00pm - 3:00pm</p>
              </Col>
            </Row>
          </Container>
        </Container>
      </Container>
      <br />
      <br />
      <br />
      <br />
    </div>
    <Footer></Footer>
  </>
);

export default Index;
