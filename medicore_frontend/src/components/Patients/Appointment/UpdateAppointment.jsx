import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Form } from 'react-bootstrap';

function UpdateAppointment() {


    useEffect(() => {
        fetch('http://localhost:8070/doctor/')
            .then(response => response.json())
            .then(data => setDoctors(data))
            .catch(error => console.error('Error fetching doctors:', error));
    }, []);

    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [reason, setReason] = useState('');
    const [info, setInfo] = useState('');
    const [doctor, setDoctor] = useState('');
    const [insurance, setInsurance] = useState('');
    const [notes, setNotes] = useState('');
    const [status, setStatus] = useState('');

    const [doctors, setDoctors] = useState([]);

    const navigate = useNavigate();

    const { id } = useParams();

    const currentUserData = localStorage.getItem('currentUser');
    const userID = JSON.parse(currentUserData)._id;

    console.log("Appointment Id: ", id);
    console.log("User Id: ", userID);

    useEffect(() => {
        axios.get(`http://localhost:8070/patient/appointments/${userID}/${id}`).then((res) => {
            setName(res.data.appointment.name);
            setDate(res.data.appointment.date);
            setTime(res.data.appointment.time);
            setReason(res.data.appointment.reason);
            setInfo(res.data.appointment.info);
            setDoctor(res.data.appointment.doctor);
            setInsurance(res.data.appointment.insurance);
            setNotes(res.data.appointment.notes);
            setStatus(res.data.appointment.status)

            console.log(res.data.appointment);

        }).catch((err) => {
            alert(err.message);
        });
    }, [userID], [id]);


    function sendData(e) {
        e.preventDefault();

        const updateAppointment = {
            name,
            date,
            time,
            reason,
            info,
            doctor,
            insurance,
            notes,
            status
        }

        axios.put(`http://localhost:8070/patient/appointments/${userID}/${id}`, updateAppointment).then(() => {
            alert("Appointment Updated");
            navigate(`/user/profile/${id}`);
        }).catch((err) => {
            alert(err);
        })
    }

    return (
        <div>
            <h2 className='text-center mt-5 mb-2'>Update Appointment</h2>
            <Container className='p-3'>
                <p>Update your details including your name, preferred date and time for the appointment, and any specific notes you'd like to add. This streamlined process aims to make scheduling your medical visits hassle-free. Your health is important to us, and we strive to make booking appointments as simple as possible.</p>
            </Container>


            <Container>
                <Form onSubmit={sendData}>
                    <div className="row">

                        <div className="col-lg-6">
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>User Id: </Form.Label>
                                <Form.Control type="text" value={userID} readOnly />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>Name: </Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" value={name}
                                    onChange={(e) => {
                                        setName(e.target.value)
                                    }}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="date">
                                <Form.Label>Appointment Date: </Form.Label>
                                <Form.Control type="date" placeholder="Appointment Date" value={date}
                                    onChange={(e) => {
                                        setDate(e.target.value)
                                    }}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="time">
                                <Form.Label>Appointment Time: </Form.Label>
                                <Form.Control type="time" placeholder="Appointment Time" value={time}
                                    onChange={(e) => {
                                        setTime(e.target.value)
                                    }}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="reason">
                                <Form.Label>Reason: </Form.Label>
                                <Form.Control type="text" placeholder="Reason" value={reason}
                                    onChange={(e) => {
                                        setReason(e.target.value)
                                    }}
                                />
                            </Form.Group>
                        </div>

                        <div className="col-lg-6">

                            <Form.Group className="mb-3" controlId="AppointmentId">
                                <Form.Label>Appointment Id: </Form.Label>
                                <Form.Control type="text" value={id} readOnly />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="info">
                                <Form.Label>Contact Information: </Form.Label>
                                <Form.Control type="text" placeholder="Information" value={info}
                                    onChange={(e) => {
                                        setInfo(e.target.value)
                                    }}
                                />
                            </Form.Group>

                            {/* <Form.Group className="mb-3" controlId="doctor">
                                <Form.Label>Doctor Selection: </Form.Label>
                                <Form.Control type="text" placeholder="Doctor" value={doctor}
                                    onChange={(e) => {
                                        setDoctor(e.target.value)
                                    }}
                                />
                            </Form.Group> */}

                            <Form.Group className="mb-3" controlId="doctor">
                                <Form.Label>Doctor Selection: </Form.Label>
                                <Form.Control as="select" value={doctor} onChange={(e) => setDoctor(e.target.value)} required>
                                    <option value="">Select Doctor</option>
                                    {doctors.map(doctor => (
                                        <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>


                            <Form.Group className="mb-3" controlId="insurance">
                                <Form.Label>Insurance Information: </Form.Label>
                                <Form.Control type="text" placeholder="Insurance" value={insurance}
                                    onChange={(e) => {
                                        setInsurance(e.target.value)
                                    }}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="notes">
                                <Form.Label>Additional Notes: </Form.Label>
                                <Form.Control type="text" placeholder="Notes" value={notes}
                                    onChange={(e) => {
                                        setNotes(e.target.value)
                                    }}
                                />
                            </Form.Group>

                            <Form.Group className="mb-1" controlId="notes">
                                <Form.Label>Status: </Form.Label>
                                <Form.Control type="checkbox"
                                    onChange={(e) => {
                                        setStatus(e.target.value)
                                    }}
                                />
                            </Form.Group>

                        </div>
                    </div >
                    <center>

                        <button type="submit" className="btn btn-success btn-xl center mt-4 mr-2 mb-4">Update Appointment</button>
                        <button type="reset" className="btn btn-danger btn-xl center mt-4 mb-4">Clear Form</button>

                    </center>
                </Form>
            </Container>

        </div>
    )
}

export default UpdateAppointment