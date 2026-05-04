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

import jacob from "../images/jacob_officer2.jpg"
import isaiah from "../images/isaiah_officer.jpg"
import gabby from "../images/gabby_officer.jpg"
import jonas from "../images/jonas_officer.jpg"
import nikita from "../images/nikita_officer.jpg"
import nathan from "../images/nathan_officer.JPEG"
import abby from "../images/abby_officer.jpg"
import max from "../images/max_officer.jpg"
import renee from "../images/renee_officer.jpg"
import emma from "../images/emma_officer.jpg"
import defaultImg from "../images/default_officer.jpg"
import kai from "../images/kai_officer.jpg"
import isabel from "../images/isabel_officer.jpg"

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
            <p className="heading-date">2026 - 2027</p>
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
              <Officercard name="Isabel Fryman" imagesrc={isabel} position="President" 
              major="Contruction Engineering" bladeimg={sabericon} blade="Sabre" year="Senior" yearimg={senior}/>
            </Col>
            <Col>
              <Officercard name="Jacob Hilton" imagesrc={jacob} position="Vice President" 
              major="Electrical Engineering" bladeimg={epeeicon} blade="Epee" year="Senior" yearimg={senior}/>
            </Col>
            <Col>
              <Officercard name="Nikita Kravcenko" imagesrc={nikita} position="Treasurer" 
              major="Finance" bladeimg={epeeicon} blade="Epee" year="Junior" yearimg={Junior}/>
            </Col>
            <Col>
              <Officercard name="Gabrielle Angelides" imagesrc={gabby} position="Fundraising Officer" major="Environmental Science + Pre-Law"
               bladeimg={epeeicon} blade="Epee" year="Senior" yearimg={senior}/>
            </Col>
            <Col>
              <Officercard name="Emma Bolig" imagesrc={emma} position="Safety Officer" 
              major="Public Health + Pre-Med" bladeimg={epeeicon} blade="Epee" year="Junior" yearimg={junior}/>
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
            <Officercard name="Grant Zhou" imagesrc={defaultImg} position="Web/Media Coordinator" 
              major="Mechanical Engineering" bladeimg={sabericon} blade="Sabre" year="Sophomore" yearimg={sophomore}/>
          </Col>
          <Col>
            <Officercard name="Renee Tung" imagesrc={renee} position="Web/Media Coordinator" 
              major="Business Analytics & Info. Mgmt" bladeimg={sabericon} blade="Sabre" year="Junior" yearimg={junior}/>
          </Col>
          <Col>
            <Officercard name="Gabrielle Angelides" imagesrc={gabby} position="Engagement Officer" 
              major="Environmental Science + Pre-Law" bladeimg={epeeicon} blade="Epee" year="Senior" yearimg={senior}/>
          </Col>
          <Col>
            <Officercard name="Isaiah Need" imagesrc={isaiah} position="Travel Coordinator" 
              major="Chemistry" bladeimg={foilicon} blade="Foil" year="Senior" yearimg={senior}/>
          </Col>
          <Col>
            <Officercard name="Rajan Jhaveri" imagesrc={defaultImg} position="Armorer" 
              major="Aerospace Engineering" bladeimg={sabericon} blade="Sabre" year="Sophomore" yearimg={sophomore}/>
          </Col>
          <Col>
            <Officercard name="Leo Yu" imagesrc={defaultImg} position="Armorer" 
              major="Mechanical Engineering" bladeimg={foilicon} blade="Foil" year="Senior" yearimg={senior}/>
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
