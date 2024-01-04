import React, { useEffect, useState } from 'react';
import { useAuthentication } from '../../Auth/AuthHelper';
import { Button, Container } from 'react-bootstrap';

function UpdatePatient() {

    const user = useAuthentication();

    if (!user) {
        return null;
    }

    const roundedDesign = {
        borderRadius: '10%', padding: '20px'
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
                                    <h5 className="my-3">{user.name}</h5>
                                    <p className="text-muted mb-1">{user.connumber}</p>
                                    <p className="text-muted mb-4">{user._id}</p>
                                    <div className="d-flex justify-content-center mb-2">
                                        <button type="button" className="btn btn-primary">Follow</button>
                                        <button type="button" className="btn btn-outline-primary ml-3">Message</button>
                                    </div>
                                </div>
                            </div>

                        </div>

                        

                        <div className="col-lg-8" >
                            <form>
                                <div className="card mb-4 border-0">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Full Name</p>
                                            </div>
                                            <div className="col-sm-9">
                                               
                                                <input type="text" className='form-control form-control-sm border-top-0' value={user.name} />
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Email</p>
                                            </div>
                                            <div className="col-sm-9">
                                               
                                                <input type="text" className='form-control form-control-sm border-top-0' value={user.email} />
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Mobile</p>
                                            </div>
                                            <div className="col-sm-9">
                                               
                                                <input type="text" className='form-control form-control-sm border-top-0' value={user.connumber} />
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Notes</p>
                                            </div>
                                            <div className="col-sm-9">
                                                
                                                <input type="text" className='form-control form-control-sm border-top-0' value={user.notes} />
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Address</p>
                                            </div>
                                            <div className="col-sm-9">
                                                
                                                <input type="text" className='form-control form-control-sm border-top-0' value={user.address} />
                                            </div>

                                        </div>
                                        <hr />
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center'>
                                <Button className='mr-3 btn btn-success' type="submit">Submit</Button>
                                    <Button className='danger btn btn-danger' type="reset">Submit</Button>
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