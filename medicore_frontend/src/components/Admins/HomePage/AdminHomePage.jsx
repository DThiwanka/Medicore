import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function AdminHomePage() {
    return (
        <div>
            <Container className="py-4">
                <h1 className="text-center mb-4">Welcome to Hospital Management System</h1>
                <Row className="mb-4">
                    <Col md={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Manage Patients</Card.Title>
                                <Card.Text>
                                    Add new patients, view patient records, and manage their information efficiently.
                                </Card.Text>
                                <Button variant="primary" href="#patients">View Patients</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Manage Doctors</Card.Title>
                                <Card.Text>
                                    Add new doctors, view their profiles, and organize their schedules effortlessly.
                                </Card.Text>
                                <Button variant="primary" href="#doctors">View Doctors</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            {/* Additional sections or components can be added below */}
        </div>
    )
}

export default AdminHomePage