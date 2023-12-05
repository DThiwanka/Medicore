import React from 'react'
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
    
    return (
        <div>
            <div>
                <section class="h-90 mt-5 mb-5">
                    <div class="mask d-flex align-items-center h-90">
                        <div class="container h-90 ">
                            <div class="row d-flex justify-content-center align-items-center h-100 ">
                                <div class="col-5 ">
                                    <div class="card bg-light"  style={{ borderRadius: "15px" }} >
                                        <div class="card-body p-5">
                                            <h2 class="text-uppercase text-center mb-5">Login</h2>

                                            <form>

                                                <div class="form-outline mb-2">
                                                    <label class="form-label" for="form3Example3cg">Your Email</label>
                                                    <input type="email" id="form3Example3cg" class="form-control form-control-lg" />

                                                </div>

                                                <div class="form-outline mb-2">
                                                    <label class="form-label" for="form3Example4cg">Password</label>
                                                    <input type="password" id="form3Example4cg" class="form-control form-control-lg" />

                                                </div>

                                                <div class="d-flex justify-content-center">
                                                    <button type="button"
                                                        class="btn btn-success btn-block btn-lg gradient-custom-4 text-body mt-3">Login</button>
                                                </div>

                                                <p class="text-center text-muted mt-3 mb-0">Haven't an account? <a href="/register"
                                                    class="fw-bold text-body"><u>Register here</u></a></p>

                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
       </div> 
    );
}

export default Login;