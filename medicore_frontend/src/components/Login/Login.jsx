import React,{useState} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function Login() {

    const history = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formError, setFormError] = useState('');


    async function handleLogin(e) {
        e.preventDefault();

            try {
                const { data, status } = await axios.post('http://localhost:8070/patient/login', {
                    email,
                    password,
                });

                if (status === 200) {

                    localStorage.setItem("currentUser", JSON.stringify(data));
                    localStorage.setItem("appointments", JSON.stringify(data.appointment));
                    // localStorage.setItem("id", JSON.stringify(data._id)); 
                    console.log(data)

                    //localStorage.setItem("Email", JSON.stringify(email));
                    

                    history({ state: { id: email } });
                    window.location.href = "/user/profile";

                } else {
                    setFormError('Invalid Credentials.');
                }
            } catch (error) {
                console.log(error);
                setFormError('Invalid Credentials.');
            }
         
    }
    
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

                                            <form action='post'>

                                                <div class="form-outline mb-2">
                                                    <label class="form-label" for="form3Example3cg">Your Email</label>
                                                    <input type="email" id="form3Example3cg" class="form-control form-control-lg" value={email} onChange={(e) => {
                                                        setEmail(e.target.value);
                                                    }} />

                                                </div>

                                                <div class="form-outline mb-2">
                                                    <label class="form-label" for="form3Example4cg">Password</label>
                                                    <input type="password" id="form3Example4cg" class="form-control form-control-lg" value={password} onChange={(e) => {
                                                        setPassword(e.target.value);
                                                    }} />

                                                </div>
                                                {formError && <div className="alert alert-danger">{formError}</div>}

                                                <div class="d-flex justify-content-center">
                                                    <button type="submit" onClick={handleLogin}
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