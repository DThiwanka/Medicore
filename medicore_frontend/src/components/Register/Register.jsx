import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Register() {
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

                                        <form>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form-outline mb-2">
                                                        <label className="form-label" htmlFor="form3Example1cg">Full Name</label>
                                                        <input type="text" id="form3Example1cg" className="form-control form-control-lg" />
                                                    </div>

                                                    <div className="form-outline mb-2">
                                                        <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                                                        <input type="email" id="form3Example3cg" className="form-control form-control-lg" />
                                                    </div>

                                                    <div className="form-outline mb-2">
                                                        <label className="form-label" htmlFor="form3Example4cg">Password</label>
                                                        <input type="password" id="form3Example4cg" className="form-control form-control-lg" />
                                                    </div>

                                                    <div className="form-outline mb-2">
                                                        <label className="form-label" htmlFor="form3Example4cdg">Repeat your password</label>
                                                        <input type="password" id="form3Example4cdg" className="form-control form-control-lg" />
                                                    </div>
                                                </div>

                                                <div className="col-lg-6">
                                                    <div className="form-outline mb-2">
                                                        <label className="form-label" htmlFor="form3Example4cg">Gender</label>
                                                        <input type="password" id="form3Example4cg" className="form-control form-control-lg" />
                                                    </div>

                                                    <div className="form-outline mb-2">
                                                        <label className="form-label" htmlFor="form3Example4cg">Blood Group</label>
                                                        <input type="password" id="form3Example4cg" className="form-control form-control-lg" />
                                                    </div>

                                                    <div className="form-outline mb-2">
                                                        <label className="form-label" htmlFor="form3Example4cg">Address</label>
                                                        <input type="password" id="form3Example4cg" className="form-control form-control-lg" />
                                                    </div>

                                                    <div className="form-outline mb-2">
                                                        <label className="form-label" htmlFor="form3Example4cg">Notes</label>
                                                        <input type="password" id="form3Example4cg" className="form-control form-control-lg" />
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
                                                <button type="button" className="btn btn-success btn-lg center mb-4">Register</button>
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

