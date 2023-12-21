import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import axios from 'axios';
import { useAuthentication } from '../../Auth/AuthHelper';
import AllAppointments from './AllAppointments';

function Appointment() {

    const [name, setname] = useState("");
    const [date, setdate] = useState("");
    const [time, settime] = useState("");
    const [reason, setreason] = useState("");
    const [info, setinfo] = useState("");
    const [doctor, setdoctor] = useState("");
    const [insurance, setinsurance] = useState("");
    const [notes, setnotes] = useState("");

    function sendData(e) {
        e.preventDefault();

        const newAppointment = {
            name,
            date,
            time,
            reason,
            info,
            doctor,
            insurance,
            notes
        }



        axios.post("http://localhost:8070/appointment/add", newAppointment).then(() => {
            alert("Appointment Added!");

            setTimeout(() => {
                window.location.reload();
            })
            
        }).catch((err) => {
            alert(err)
        })
    }

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
                <Form onSubmit={sendData}>
                    <div className="row">
                        <div className="col-lg-6">
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>Name: </Form.Label>
                                <Form.Control type="text" placeholder="Enter email"
                                    onChange={(e) => {
                                        setname(e.target.value)
                                    }}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="date">
                                <Form.Label>Appointment Date: </Form.Label>
                                <Form.Control type="date" placeholder="Appointment Date"
                                    onChange={(e) => {
                                        setdate(e.target.value)
                                    }}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="time">
                                <Form.Label>Appointment Time: </Form.Label>
                                <Form.Control type="time" placeholder="Appointment Time"
                                    onChange={(e) => {
                                        settime(e.target.value)
                                    }}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="reason">
                                <Form.Label>Reason: </Form.Label>
                                <Form.Control type="text" placeholder="Reason"
                                    onChange={(e) => {
                                        setreason(e.target.value)
                                    }}
                                />
                            </Form.Group>
                        </div>

                        <div className="col-lg-6">
                            <Form.Group className="mb-3" controlId="info">
                                <Form.Label>Contact Information: </Form.Label>
                                <Form.Control type="text" placeholder="Information"
                                    onChange={(e) => {
                                        setinfo(e.target.value)
                                    }}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="doctor">
                                <Form.Label>Doctor Selection: </Form.Label>
                                <Form.Control type="text" placeholder="Doctor"
                                    onChange={(e) => {
                                        setdoctor(e.target.value)
                                    }}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="insurance">
                                <Form.Label>Insurance Information: </Form.Label>
                                <Form.Control type="text" placeholder="Insurance"
                                    onChange={(e) => {
                                        setinsurance(e.target.value)
                                    }}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="notes">
                                <Form.Label>Additional Notes: </Form.Label>
                                <Form.Control type="text" placeholder="Notes"
                                    onChange={(e) => {
                                        setnotes(e.target.value)
                                    }}
                                />
                            </Form.Group>
                        </div>
                    </div >
                    <center>

                        <button type="submit" className="btn btn-success btn-xl center mt-4 mr-2">Add Appointment</button>
                        <button type="reset" className="btn btn-danger btn-xl center mt-4">Clear Form</button>

                    </center>
                </Form>
            </Container>
            <AllAppointments/>
        </div>

    )
}

export default Appointment