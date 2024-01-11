import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuthentication } from '../../Auth/AuthHelper';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function UpdatePatient(props) {
    // const [userData, setUserData] = useState({
    //     name: '',
    //     email: '',
    //     connumber: '',
    //     notes: '',
    //     address: '',
    // });

    const id = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser'))._id : '';
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [connumber, setConnumber] = useState('');
    const [notes, setNotes] = useState('');
    const [address, setAddress] = useState('');


    console.log(id);
    console.log(currentUser.name); 

    useEffect(() => {
        async function getPatient() {
           
            const response = await axios.get(`http://localhost:8070/patient/get/${id}`);
            console.log(response.data);
            setName(response.data.name);
            setEmail(response.data.email);
            setConnumber(response.data.connumber);
            setNotes(response.data.notes);
            setAddress(response.data.address);
        }
        getPatient();
    }, []);

    // const onChange = (e) => {
    //     const { name, value } = e.target;
    //     setUserData((prevUserData) => ({
    //         ...prevUserData,
    //         [name]: value,
    //     }));
    // };

    // const onSubmit = (e) => {
    //     e.preventDefault();

    //     const data = {
    //         name: userData.name,
    //         email: userData.email,
    //         connumber: userData.connumber,
    //         notes: userData.notes,
    //         address: userData.address,
    //     };

    function sendData(e) {
        e.preventDefault();

        const newPatient = {
            name,
            email,
            connumber,
            notes,
            address,
        }

        var result = window.confirm(`Are you sure to Update Your Profile?`);
        if (result) {
            axios.put(`http://localhost:8070/patient/update/${id}`, newPatient)
                .then((res) => {
                    console.log(res.data);
                    window.location.reload();
                })
                .catch((err) => {
                    console.log('Error in UpdateBookInfo:', err);
                });
        } else { 
            return;
        }
    

        
    };

    const roundedDesign = {
        borderRadius: '5%', padding: '20px'
    }

    return (
        <div>

            <section>
                <h2 className='mt-4 text-center'>Update Profile</h2>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card mt-2" style={roundedDesign}>
                                <div className="card-body text-center">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                                        className="rounded-circle img-fluid" style={{ width: "130px" }} />
                                    <h5 className="my-3">{}</h5>
                                    <p className="text-muted mb-1">{connumber}</p>
                                    <p className="text-muted mb-4">{id}</p>
                                    <div className="d-flex justify-content-center mb-2">
                                        <button type="button" className="btn btn-primary">Follow</button>
                                        <button type="button" className="btn btn-outline-primary ml-3">Message</button>
                                    </div>
                                </div>
                            </div>

                        </div>

                        

                        <div className="col-lg-8" >
                            <form onSubmit={sendData}>
                                <div className="card mb-4 border-0">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Full Name</p>
                                            </div>
                                            <div className="col-sm-9">
                                               
                                                <input type="text" className='form-control form-control-sm border-top-0' name='name' defaultValue={name} onChange={(e) => {setName(e.target.value);}} />
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Email</p>
                                            </div>
                                            <div className="col-sm-9">
                                               
                                                <input type="text" className='form-control form-control-sm border-top-0' name='email' defaultValue={email} onChange={(e) => {setEmail(e.target.value);}} />
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Mobile</p>
                                            </div>
                                            <div className="col-sm-9">
                                               
                                                <input type="text" className='form-control form-control-sm border-top-0' name='connumber' defaultValue={connumber} onChange={(e) => {setConnumber(e.target.value);}} />
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Notes</p>
                                            </div>
                                            <div className="col-sm-9">
                                                
                                                <input type="text" className='form-control form-control-sm border-top-0' name='notes' defaultValue={notes} onChange={(e) => {setNotes(e.target.value);}} />
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Address</p>
                                            </div>
                                            <div className="col-sm-9">
                                                
                                                <input type="text" className='form-control form-control-sm border-top-0' name='address' defaultValue={address} onChange={(e) => {setAddress(e.target.value);}} />
                                            </div>

                                        </div>
                                        <hr />
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center'>
                                <Button className='mr-3 btn btn-success' type="submit">Submit</Button>
                                    <Button className='danger btn btn-danger' type="reset">Rest</Button>
                                </div>
                            </form>
                            </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default UpdatePatient