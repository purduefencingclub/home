import React from "react";
import { Container, Row, Col, Button} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import "../styles/index.css";

const SignUp = () => (
  <>
    <script
      src="https://kit.fontawesome.com/a17da011a4.js"
      crossorigin="anonymous"
    ></script>
    <div className="sign-up-nav">
      <Navigation></Navigation>
      <div className="header-text">
        <Container>
          <Row>
            <p className="heading-about">JOINING PFC</p>
          </Row>
        </Container>
      </div>
    </div>
    <br />
    <div>
      <Container className="fencing-body">
        <h1>
          The next beginner's practice session is: September 3rd, 9:00pm in MP5 in the Corec
        </h1>
        <br />
        <hr></hr>
          <br />
          <h2>Pre-Practice Item 1: Sign the Waiver</h2>
          <p className="fencing-text">
            Before you can start fencing, you'll have to sign our waiver.
            Fencing isn't dangerous, but it is a contact sport!
          </p>

          <a href="https://powerforms.docusign.net/95ff1cad-4684-44d3-b347-b1de508ee8cf?env=na2&accountId=9ad6adfd-6804-409b-91bc-173cbee909f9">
            <Button variant="dark">Sign The Waiver Here</Button>
          </a>
            
          <a href="https://powerforms.docusign.net/99f87433-9769-472c-882d-231571058091?env=na2&accountId=9ad6adfd-6804-409b-91bc-173cbee909f9">
            <Button variant="dark">Waiver for Minors</Button>
          </a>
        <br />
        <hr></hr>
          <br />
          <h2>Pre-Practice Item 2: Wear the Right Clothes</h2>
          <p className="fencing-text">
            Make sure you wear gym shoes and athletic clothing to practice.
          </p>
          <br />
        <hr></hr>
        <br />
          <h2>
            (Optional) Pre-Practice Item 3: Skim the
            <a href="/beginner"> Beginner </a> Resource Page
          </h2>
          <p className="fencing-text">
            This page has some info on the basics of fencing that will give you
            a head start before practice. If you can't read it though, don't
            worry, we'll cover everything at practice.
          </p>
          <br />1
        <hr></hr>
        <h2>
          If you've signed the waiver, and are wearing the right clothes, you're
          ready to go! Just meet us at the Corec, and we've got the rest.
          Welcome to fencing!
        </h2>
      </Container>
      <br />
      <br />
    </div>
    <Footer></Footer>
  </>
);

export default SignUp;
