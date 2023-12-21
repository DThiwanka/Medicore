import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function PatientHomePage() {

    const buttonStyle = {
        fontSize: '16px',
        padding: '10px 24px',
        marginTop: '50%'
    };

    const cardStyle = {

        borderRadius: '15px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', transitionDuration: '0.3s', background: 'linear-gradient(to bottom, lightblue, white)'
    }
    

    return (
        <Container className="py-4">
            <h1>Welcome to Hospital Services</h1>
            <p>Explore our services and manage your appointments conveniently.</p>

            <Row className="mt-4">
                <Col md={4}>
                    <Card className="mb-4" style={cardStyle}>
                        <Card.Body>
                            <Card.Title style={{ fontSize: '24px', fontWeight: 'bold' }}>Make an Appointment</Card.Title>
                            <Card.Text style={{ fontSize: '18px' }}>Schedule appointments with our doctors easily.</Card.Text>
                            <Button variant="primary" href="user/appointments" style={buttonStyle}>Book Now</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="mb-4 h-5" style={cardStyle}>
                        <Card.Body>
                            <Card.Title style={{ fontSize: '24px', fontWeight: 'bold' }}>View Doctors</Card.Title>
                            <Card.Text style={{ fontSize: '18px' }}>Explore our skilled doctors and their profiles.</Card.Text>
                            <Button variant="primary" href="#view-doctors" style={buttonStyle}>Explore</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="mb-4" style={cardStyle}>
                        <Card.Body>
                            <Card.Title style={{ fontSize: '24px', fontWeight: 'bold' }}>Services</Card.Title>
                            <Card.Text style={{ fontSize: '18px' }}>Discover various medical services offered.</Card.Text>
                            <Button variant="primary" href="#services" style={buttonStyle}>Explore Services</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default PatientHomePage;