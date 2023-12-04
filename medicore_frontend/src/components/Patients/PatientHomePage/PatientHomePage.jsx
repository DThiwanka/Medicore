import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function PatientHomePage() {
    return (
        <Container className="py-4">
            <h1>Welcome to Hospital Services</h1>
            <p>Explore our services and manage your appointments conveniently.</p>

            <Row className="mt-4">
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Make an Appointment</Card.Title>
                            <Card.Text>
                                Schedule appointments with our doctors easily.
                            </Card.Text>
                            <Button variant="primary" href="#make-appointment">Book Now</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>View Doctors</Card.Title>
                            <Card.Text>
                                Explore our skilled doctors and their profiles.
                            </Card.Text>
                            <Button variant="primary" href="#view-doctors">Explore</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Services</Card.Title>
                            <Card.Text>
                                Discover various medical services offered.
                            </Card.Text>
                            <Button variant="primary" href="#services">Explore Services</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default PatientHomePage