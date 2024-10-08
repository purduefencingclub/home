import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import image1 from "../images/image1.jpeg";
import Footer from "../components/Footer";

import oldfencing1 from "../images/oldfencing1.jpeg";
import oldfencing2 from "../images/oldfencing2.jpeg";

import fencingpic1 from "../images/fencingpic3.jpg";
import fencingpic2 from "../images/fencingpic4.jpg";
import fencingpic3 from "../images/fencingpic6.jpg";
import fencingpic4 from "../images/fencingpic9.png";

import leftfoil from "../images/uprightfoil2.png";
import rightsaber from "../images/rightsaber1.png";
import downsaber from "../images/downsaber.png";
import downfoil from "../images/downfoil.png";
import downepee from "../images/downepee.png";

import Navigation from "../components/Navigation";
import CarouselComponent from "../components/Carousel";
import "../styles/index.css";

const About = () => (
  <>
    {/* General notes about this page: I don't really like the layout of the first section. It could
    definitely be improved. The second section with the "beliefs" I think makes a lot of sense to add.
    I got those words from the consitution of the club. I like the icons too.  */}
    <script
      src="https://kit.fontawesome.com/a17da011a4.js"
      crossorigin="anonymous"
    ></script>
    <div className="secondary-nav">
      <Navigation></Navigation>
      <div className="header-text">
        <Container>
          <Row>
            <p className="heading-fencing">ABOUT US</p>
          </Row>
        </Container>
      </div>
    </div>
    <br />
    <div>
      {/* After a little research I think adding these classnames aren't a good way to style the page.
    I originally wanted the last columns in the grid to be center aligned, but I think that
    A) looks worse and B) is unneccesary, so perhaps not doing this is better */}
      <Container className="about-intro fencing-body">
          <Row>
            <Col>
              <br />
              <p className="fencing-header text-uppercase text-center">
                Over 100 Years of Slashing, Parrying, Stabbing, and Riposting
              </p>
            </Col>
          </Row>
          <br />
          <br />
          <Row xs={1} md={2}>
            <Col>
              <h3>Our History</h3>
              <br />
              <p className="fencing-text">
                The Purdue Fencing Club was founded in 1922 as a five-man
                varsity fencing squad. As the varsity squad gained popularity,
                in 1935, an honorary fraternal order, Silver Mask, formed. In
                1970, men's varsity fencing dissolved into Purdue Fencing Club
                in its modern form. The Purdue Fencing Club is not only one of
                the longest standing clubs on the Purdue University campus, it
                is also one of the oldest fencing clubs in the US!
              </p>
              <br />
            </Col>
            <Col>
              <img src={oldfencing2} width="100%" />
            </Col>
          </Row>
          <br />
          <br />
        <br />
        <hr></hr>
        <br />
        <br />
        <Container className="fencing-carousel text-center">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 fencing-img-crop"
                src={fencingpic1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 fencing-img-crop"
                src={fencingpic2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 fencing-img-crop"
                src={fencingpic3}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 fencing-img-crop"
                src={fencingpic4}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Container>

        <br />
        <br />
        {/* <img src={leftfoil} /> */}

        <div className="work-improvement">
            <h2>OUR BELIEFS</h2>
            <br />
            <br />
            <Row xs={1} md={2} lg={4}>
              <Col>
                <i class="fas fa-hands-helping fa-3x"></i>
                <h2>Sportsmanship.</h2>
                <br />
                <p>
                  At PFC, we believe that sportsmanship is an integral part of
                  not only competition, but our club as well. We strive to
                  achieve our goals with proper consideration for fairness,
                  ethics, and respect.
                </p>
              </Col>
              <Col>
                <i class="fas fa-running fa-3x"></i>
                <h2>Athleticism.</h2>
                <br />
                <p>
                  Within our club, we cultivate a positive environment towards
                  exercise and athleticism. Fitness is a regular part of PFC and
                  we encourage all members to participate in conditioning
                  regardless of their current physical ability.
                </p>
              </Col>
              <Col>
                <i class="fas fa-hammer fa-3x"></i>
                <h2>Improvement.</h2>
                <br />
                <p>
                  The ability to learn and push ourselves to achieve our goals
                  is critical, especially in a university environment. We value
                  improving over winning, in both practice or tournaments.
                </p>
              </Col>
              <Col>
                <i class="fas fa-users fa-3x"></i>
                <br />
                <h2>Community.</h2>
                <br />
                <p>
                  Above all else, PFC is a community. We are proud to welcome
                  anyone with interest in fencing, regardless of skill, race,
                  religion, gender identity, sex, age, or disability. We hope to
                  see you at practice!
                </p>
              </Col>
            </Row>
        </div>
        {/* <img src={rightsaber} /> */}
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
    <Footer></Footer>
  </>
);

export default About;
