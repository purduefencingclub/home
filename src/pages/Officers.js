import React from "react";
import { Nav, Container, Button, Row, Col, Card, Image } from "react-bootstrap";
import divider from "../images/divider1.png";
import foilicon from "../images/foilicon2.png";
import sabericon from "../images/sabericon.png";
import epeeicon from "../images/epeeicon.png";
import sophomore from "../images/sophomore.png";
import junior from "../images/junior.png";
import senior from "../images/senior.png";

import Footer from "../components/Footer";
import rightsaber from "../images/rightsaber1.png";
import rightfoil from "../images/rightfoil.png";
import Officercard from "../components/Officercard"

import joshua from "../images/joshua_officer.jpg";
import casper from "../images/casper_officer.jpg"
import anya from "../images/anya_officer.jpg"
import perry from "../images/perry_officer.jpg"
import aidan from "../images/aidan_officer.jpg"
import phillip from "../images/phillip_officer.png"
import kayla from "../images/kayla_officer.jpg"
import maria from "../images/maria_officer.jpg"
import katy from "../images/katy_officer.jpg"


import Navigation from "../components/Navigation";
import "../styles/index.css";

const Officers = () => (
  <>
    {/* General notes about this page: I like how the cards look. The page has some CSS styling issues that need
    to be addressed, specifically with the grid. Their padding is being adjusted but it's getting messed up on
    mobile. As for the layout of the page, I think it's okay, but I can't tell if it's missing something. - Sasha 2021-22*/}

    {/* I created an officer card component to have easier editing of the page. Need to find out where Sasha got those icons from
    or eventually make my own, I really like them. Also need to update the staff section. - Phillip 2023-24*/}
    <script
      src="https://kit.fontawesome.com/a17da011a4.js"
      crossorigin="anonymous"
    ></script>
    <div className="officer-nav">
      <Navigation></Navigation>
      <div className="header-text">
        <Container>
          <Row>
            <p className="heading-fencing">OFFICERS</p>
            <p className="heading-date">2023 - 2024</p>
          </Row>
        </Container>
      </div>
    </div>
    <br />
    <div>
      <Container className="fencing-body">
          <Row>
            <Col>
              <img
                src={rightfoil}
                width="100%"
                className="fencing-divider-img"
              />
            </Col>
            <Col>
              <h2 className="text-center font-weight-bold fencing-divider-subtitle">
                PRIMARY OFFICERS
              </h2>
            </Col>
            <Col>
              <img
                src={rightsaber}
                className="divider-rotate-180 fencing-divider-img"
                width="100%"
              />
            </Col>
          </Row>
          <br />
          <Row xs={1} sm={2} md={2} lg={2} xl={3}>
            {/* xs and md refer to the column number for extra small/medium devices (1 on mobile, 3 on laptop)
          (phones/laptops) which helps spacing on different device widths. 
          Need to add these to other pages */}
            <Col>
              <Officercard name="Joshua Nimmo" imagesrc={joshua} position="Treasurer + Community Service Officer" 
              major="Computer Science" bladeimg={foilicon} blade="Foil" year="Senior" yearimg={senior}/>
            </Col>
            <Col>
              <Officercard name="Casper Lai" imagesrc={casper} position="President" 
              major="Industrial Engineering" bladeimg={sabericon} blade="Sabre" year="Junior" yearimg={junior}/>
            </Col>
            <Col>
              <Officercard name="Anya Ghali" imagesrc={anya} position="Vice President" 
              major="Aero/Astro Engineering + Math" bladeimg={sabericon} blade="Sabre" year="Junior" yearimg={junior}/>
            </Col>
            <Col>
              <Officercard name="Peregrine Zhang" imagesrc={perry} position="Fundraising Officer" 
              major="Finance" bladeimg={sabericon} blade="Sabre" year="Sophomore" yearimg={sophomore}/>
            </Col>
            <Col>
              <Officercard name="Katy Heath" imagesrc={katy} position="Safety Officer" 
              major="Speech Language Hearing Sciences + Pre-Med" bladeimg={sabericon} blade="Sabre" year="Junior" yearimg={junior}/>
            </Col>
          </Row>
        <br />
        <br />
        <br />
      </Container>
      <Container className="fencing-body">
        <Row>
          <Col>
            <img src={rightfoil} width="100%" className="fencing-divider-img" />
          </Col>
          <Col>
            <h2 className="text-center font-weight-bold fencing-divider-subtitle">
              OTHER OFFICERS
            </h2>
          </Col>
          <Col>
            <img
              src={rightsaber}
              className="divider-rotate-180 fencing-divider-img"
              width="100%"
            />
          </Col>
        </Row>
        <br />
        <Row xs={1} sm={1} md={2} lg={2} xl={3}>
          <Col>
            <Officercard name="Aidan Villegas" imagesrc={aidan} position="Web/Media Coordinator" 
              major="Robotics Engineering Technology" bladeimg={sabericon} blade="Sabre" year="Junior" yearimg={junior}/>
          </Col>
          <Col>
            <Officercard name="Phillip Bernwanger" imagesrc={phillip} position="Head Web/Media Coordinator" 
              major="Computer Science" bladeimg={foilicon} blade="Foil" year="Junior" yearimg={junior}/>
          </Col>
          <Col>
            <Officercard name="Kayla Robinson" imagesrc={kayla} position="Web/Media Coordinator" 
              major="Industrial Design" bladeimg={epeeicon} blade="Epee" year="Junior" yearimg={junior}/>
          </Col>
          <Col>
            <Officercard name="Maria Soare" imagesrc={maria} position="Travel Coordinator" 
              major="Aero/Astro Engineering" bladeimg={epeeicon} blade="Epee" year="Senior" yearimg={senior}/>
          </Col>
        </Row>
        <br />
        <br />
        <br />

        {/* STAFF CONTAINER
        <Container>
          <Row>
            <Col>
              <img
                src={rightfoil}
                width="100%"
                className="fencing-divider-img"
              />
            </Col>
            <Col>
              <h2 className="text-center font-weight-bold fencing-divider-subtitle">
                STAFF
              </h2>
            </Col>
            <Col>
              <img
                src={rightsaber}
                className="divider-rotate-180 fencing-divider-img"
                width="100%"
              />
            </Col>
          </Row>
          <br />
        </Container>
        */}
        
      </Container>
    </div>
    <br />
    <br />

    <br />

    <br />
    <br />
    <br />
    <br />
    <br />

    <Footer></Footer>
  </>
);

export default Officers;
