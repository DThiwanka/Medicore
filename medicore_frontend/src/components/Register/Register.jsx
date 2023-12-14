import React,{useState} from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function Register() {

    const [fullName, setfullName] = useState("");
    const [email,setemail] = useState("");
    const [password, setpassword] = useState("");
    const [reppassword,setreppassword] = useState("");
    const [gender, setgender] = useState("");
    const [bloodGroup, setbloodGroup] = useState("");
    const [address, setaddress] = useState("");
    const [notes, setnotes] = useState("");

    function sendData(e) {
        e.preventDefault();

        const newPatient = {
            fullName,
            email,
            password,
            reppassword,
            gender,
            bloodGroup,
            address,
            notes
        }
        //alert("insert");
        //console.log(newPatient);
        
        axios.post()

    }

    return (
        <div>
            <section className="h-90 mt-5 mb-5">
                <div className="mask d-flex align-items-center h-90">
                    <div className="container h-90">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12">
                                <div className="card bg-light" style={{ borderRadius: "15px" }}>
                                    <div className="card-body p-5">
                                        <h2 className="text-uppercase text-center mb-5">Create an account</h2>

                                        <form onSubmit={sendData}>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form-outline mb-2">
                                                        <label className="form-label" htmlFor="fullName">Full Name</label>
                                                        <input type="text" id="fullName" className="form-control form-control-lg"
                                                        onChange={(e) => {
                                                            setfullName(e.target.value);
                                                        }}
                                                        />
                                                    </div>

                                                    <div className="form-outline mb-2">
                                                        <label className="form-label" htmlFor="email">Your Email</label>
                                                        <input type="email" id="email" className="form-control form-control-lg"
                                                        onChange={(e) => {
                                                            setemail(e.target.value);
                                                        }}
                                                        />
                                                    </div>

                                                    <div className="form-outline mb-2">
                                                        <label className="form-label" htmlFor="password">Password</label>
                                                        <input type="password" id="password" className="form-control form-control-lg"
                                                        onChange={(e) => {
                                                            setpassword(e.target.value);
                                                        }}
                                                        />
                                                    </div>

                                                    <div className="form-outline mb-2">
                                                        <label className="form-label" htmlFor="reppassword">Repeat your password</label>
                                                        <input type="text" id="reppassword" className="form-control form-control-lg"
                                                        onChange={(e) => {
                                                            setreppassword(e.target.value);
                                                        }}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-lg-6">
                                                    <div className="form-outline mb-2">
                                                        <label className="form-label" htmlFor="gender">Gender</label>
                                                        <input type="text" id="gender" className="form-control form-control-lg"
                                                        onChange={(e) => {
                                                            setgender(e.target.value);
                                                        }}
                                                        />
                                                    </div>

                                                    <div className="form-outline mb-2">
                                                        <label className="form-label" htmlFor="bloodGroup">Blood Group</label>
                                                        <input type="text" id="bloodGroup" className="form-control form-control-lg" 
                                                        onChange={(e) => {
                                                            setbloodGroup(e.target.value);
                                                        }}
                                                        />
                                                    </div>

                                                    <div className="form-outline mb-2">
                                                        <label className="form-label" htmlFor="address">Address</label>
                                                        <input type="text" id="address" className="form-control form-control-lg"
                                                        onChange={(e) => {
                                                            setaddress(e.target.value);
                                                        }}
                                                        />
                                                    </div>

                                                    <div className="form-outline mb-2">
                                                        <label className="form-label" htmlFor="notes">Notes</label>
                                                        <input type="text" id="notes" className="form-control form-control-lg"
                                                        onChange={(e) => {
                                                            setnotes(e.target.value);
                                                        }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            
                                            <div className="form-check d-flex mb-3 ">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                                                <label className="form-check-label" htmlFor="form2Example3g">
                                                    I agree to all statements in <u>Terms of service</u>
                                                </label>
                                            </div>
                                            <center>
                                            <div className="d-grid gap-2">
                                                <button type="submit" className="btn btn-success btn-lg center mb-4">Register</button>
                                            </div>

                                                Already have an account? <a href="/login " className="fw-bold text-body"><u>Login here</u></a>
                                                </center>
                                        </form>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Register;

