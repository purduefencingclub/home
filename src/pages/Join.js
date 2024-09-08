import React from "react";
import {
  Nav,
  Container,
  Button,
  Row,
  Col,
  Card,
  CardGroup,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import beginner from "../images/Lunge group.png";
import rightsaber from "../images/rightsaber1.png";
import rightfoil from "../images/rightfoil.png";
import fencingpic1 from "../images/beginner.jpeg";

import { Visible, Hidden } from "react-grid-system";

import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import "../styles/index.css";
import Eventcard from "../components/Eventcard";

const Join = () => (
  <>
    {/* General notes about this page: Not really sure about the design, I kinda just put stuff on the page.
    It's okay but it also feels like something is missing. I can't tell if it's a content issue or a space
    issue. I like the cards here, though, as it stylistically matches the officers page and provides
    an easy way to update the site in the future.
    Additionally, it would be really cool to have these pull info from an event database, which would also 
    signicantly reduce the amount of work in updating the page. - Sasha (2021-22)*/}

    {/* I plan on making a component for events to be added/removed from the page easily, the props can be eventually updated from a database.
    I like the card design with an optional button, but I'm gonna have to standardize it. - Phillip (2023-24)*/}
    <script
      src="https://kit.fontawesome.com/a17da011a4.js"
      crossorigin="anonymous"
    ></script>
    <div className="join-nav">
      <Navigation></Navigation>
      <div>
        <Container className="join-header">
          <Row>
            <p className="heading-join">
              READY TO <br />
              FENCE?
            </p>
          </Row>
        </Container>
      </div>
    </div>
    <br />
    <br />
    <br />
    <Container className="fencing-body">
      <Row>
        <Hidden xs sm md>
          <Col>
            <img src={rightfoil} width="100%" />
          </Col>
        </Hidden>
        <Col>
          <h1 className="text-center">UPCOMING EVENTS</h1>
          <Visible xs sm md>
            <br />
            <hr />
          </Visible>
        </Col>
        <Hidden xs sm md>
          <Col>
            <img src={rightsaber} className="divider-rotate-180" width="100%" />
          </Col>
        </Hidden>
      </Row>
      
      {/* <h1 className="text-center">OPPORTUNITIES FOR BEGINNERS</h1> */}
      <Eventcard cardTitle="Beginner's Class"
       cardBody="Learn to fence! Over a month, our club members will teach you the basics of all three disciplines of fencing: foil, saber, and epee. We will provide all the equipment you'll need to get started. If you're interested, click the button below!"
       cardButtonText="New fencers, start here!"
       cardButtonLink="/sign-up"
       cardFooterText="Next Class: September 10th, 9:00pm | Location: Corec MP5"
       cardImage={beginner}
       />
      <Eventcard cardTitle="Practice / Open Fencing"
       cardBody="Standard practices with open fencing from 9:00pm to 11:45pm on Tuesday and Thursday, and 12:00pm-2:00pm on Saturdays. Fencers who have not yet signed their safety waivers can click the button below."
       cardButtonText="Safety waiver for new members."
       cardButtonLink="/sign-up"
       cardFooterText="Next Class: Tue, Thur, Sat| Location: Corec MP5"
       cardImage={fencingpic1}
       />
    </Container>
    <br />
    <br />
    <br />
    <Footer></Footer>
  </>
);

export default Join;
