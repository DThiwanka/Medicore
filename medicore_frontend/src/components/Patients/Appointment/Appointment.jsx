import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useAuthentication } from '../../Auth/AuthHelper';

function Appointment() {

    const user = useAuthentication();

    if (!user) {
        return null;
    }


    return (
        <div>
            <h2 className='text-center mt-5 mb-2'>Add New Appointment</h2>
            <Container className='p-3'>
                <p>Enter your details including your name, preferred date and time for the appointment, and any specific notes you'd like to add. This streamlined process aims to make scheduling your medical visits hassle-free. Your health is important to us, and we strive to make booking appointments as simple as possible.</p>
            </Container>

            <Container>
                <Form>
                    <div className="row">
                        <div className="col-lg-6">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name: </Form.Label>
                                <Form.Control type="text" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Appointment Date: </Form.Label>
                                <Form.Control type="date" placeholder="Appointment Date" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Appointment Time: </Form.Label>
                                <Form.Control type="time" placeholder="Appointment Time" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Reason: </Form.Label>
                                <Form.Control type="text" placeholder="Reason" />
                            </Form.Group>
                        </div>

                        <div className="col-lg-6">
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Contact Information: </Form.Label>
                                <Form.Control type="text" placeholder="Information" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Doctor Selection: </Form.Label>
                                <Form.Control type="text" placeholder="Doctor" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Insurance Information: </Form.Label>
                                <Form.Control type="text" placeholder="Insurance" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Additional Notes: </Form.Label>
                                <Form.Control type="text" placeholder="Notes" />
                            </Form.Group>
                        </div>
                    </div >
                    <center>
                       
                        <button type="submit" className="btn btn-success btn-xl center mt-4 mr-2">Add Appointment</button>
                        <button type="reset" className="btn btn-danger btn-xl center mt-4">Clear Form</button>
                        
                    </center>
                </Form>
            </Container>
        </div>
        
    )
}

export default Appointment