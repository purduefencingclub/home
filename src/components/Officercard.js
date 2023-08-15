import { Nav, Container, Button, Row, Col, Card, Image } from "react-bootstrap";
const Officercard = ({name, imagesrc, position, major, bladeimg, blade, year, yearimg}) => {

    return (
        <Card className="text-center officer-card">
        <Card.Img style={{height: 400 + 'px', objectFit: 'cover'}}   variant="top" src={imagesrc} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
            {position}
            </Card.Subtitle>
            <br />
            <Card.Text>
            <Row xs={3} md={3}>
                <Col>
                <p className="officer-info">{major}</p>
                </Col>
                <Col>
                <img src={bladeimg} width="45%" />
                <p className="officer-info">{blade}</p>
                </Col>
                <Col>
                <img src={yearimg} width="45%" />
                <p className="officer-info">{year}</p>
                </Col>
            </Row>
            </Card.Text>
        </Card.Body>
        </Card>
        )
    }
export default Officercard