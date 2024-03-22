import React,{useState} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import '../Styles/Login.css';


function Login() {

    const history = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formError, setFormError] = useState('');


    async function handleLogin(e) {
        e.preventDefault();

            try {
                const { data, status } = await axios.post('https://medicore.onrender.com/patient/login', {
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
                    window.location.href = `/user/profile/${email}`;

                } else {
                    setFormError('Invalid Credentials.');
                }
            } catch (error) {
                console.log(error);
                setFormError('Invalid Credentials.');
            }
         
    }
    
    return (
        <div classNameName='basic'>
            <div>
                <section className="h-90 mt-5 mb-5">
                    <div className="mask d-flex align-items-center h-90">
                        <div className="container h-90 ">
                            <div className="row d-flex justify-content-center align-items-center h-100 ">
                                <div className="col-5">
                                    
                                    <div className="card bg-light" style={{ borderRadius: "15px" }} >
                                        <div className="card-body p-5">
                                            <h2 className="text-uppercase text-center mb-5 dt-title">Login</h2>

                                            <form action='post'>

                                                <div className="form-outline mb-3">
                                                    <label className="form-label" for="form3Example3cg">Your Email</label>
                                                    <input type="email" id="form3Example3cg" className="form-control form-control-lg" value={email} onChange={(e) => {
                                                        setEmail(e.target.value);
                                                    }} />

                                                </div>

                                                <div className="form-outline mb-3">
                                                    <label className="form-label" for="form3Example4cg">Password</label>
                                                    <input type="password" id="form3Example4cg" className="form-control form-control-lg" value={password} onChange={(e) => {
                                                        setPassword(e.target.value);
                                                    }} />

                                                </div>
                                                {formError && <div classNameName="alert alert-danger">{formError}</div>}

                                                <div className="d-flex justify-content-center">
                                                    <button type="submit" onClick={handleLogin}
                                                        className="btnl btn-success btn-block btn-lg gradient-custom-4 text-body mt-3">Login</button>
                                                </div>

                                                <p className="text-center text-muted mt-3 mb-0">Haven't an account? <a href="/register"
                                                    className="fw-bold text-body"><u>Register here</u></a></p>

                                            </form>

                                        </div>
                                    </div>
                                    <center/>
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