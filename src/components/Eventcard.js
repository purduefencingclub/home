import { Nav, Container, Button, Row, Col, Card, Image } from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
const Eventcard = ({cardTitle, cardBody, cardButtonText, cardButtonLink, cardFooterText, cardImage}) => {

    return (
            <Container>
            <hr></hr>
            <br />
            <Row xs={1} md={1}>
            <Col>
                <Card className="event-card">
                <Card.Img
                    variant="bottom"
                    src={cardImage}
                />
                <Card.Body>
                    <Card.Title>{cardTitle}</Card.Title>
                    <Card.Text>
                    {cardBody}
                    <br />
                    <br />
                    <LinkContainer to={cardButtonLink}>
                        <Button variant="dark">{cardButtonText}</Button>
                    </LinkContainer>
                    <br />
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                    {cardFooterText}
                </Card.Footer>
                </Card>
            </Col>
            </Row>
            </Container>
        )
    }
export default Eventcard