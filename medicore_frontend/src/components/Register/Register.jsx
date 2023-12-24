import React,{useState} from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function Register() {

    const [name, setname] = useState("");
    const [email,setemail] = useState("");
    const [password, setpassword] = useState("");
    const [reppassword,setreppassword] = useState("");
    const [gender, setgender] = useState("");
    const [bloodGroup, setbloodGroup] = useState("");
    const [address, setaddress] = useState("");
    const [notes, setnotes] = useState("");
    const [connumber, setconnumber] = useState("");
    const [age, setage] = useState("");

    
    

    function sendData(e) {
        e.preventDefault();

        const newPatient = {
            name,
            email,
            password,
            reppassword,
            gender,
            bloodGroup,
            address,
            notes,
            connumber,
            age,
            
        }
        //alert("insert");
        //console.log(newPatient);

        function clearform (){

            document.getElementById("pat").reset();

        };
        
        if(password === reppassword){
        axios.post("http://localhost:8070/patient/add",newPatient).then(()=>{
            
            alert("Account Created Successfully!");
            clearform();
            
            setTimeout(() => {
                window.location.href = '/login'
            },2000)

        }).catch((err)=>{
            alert(err)
        })
        }else{
            alert('Password is not valid!');
            clearform();
        }

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

                                        <form id="pat" onSubmit={sendData}>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form-outline mb-2">
                                                        <label className="form-label" htmlFor="name">Full Name</label>
                                                        <input type="text" required id="name" className="form-control form-control-lg"
                                                        onChange={(e) => {
                                                            setname(e.target.value);
                                                        }}
                                                        />
                                                    </div>
                                                    
                                                    <div className="form-outline mb-2">
                                                        <label className="form-label" htmlFor="email">Your Email</label>
                                                        <input type="email" required id="text" className="form-control form-control-lg"
                                                        onChange={(e) => {
                                                            setemail(e.target.value);
                                                        }}
                                                        />
                                                    </div>

                                                    <div className="form-outline mb-2">
                                                        <label className="form-label" htmlFor="contactnum">Contact Number</label>
                                                        <input type="connumber" required id="connumber" className="form-control form-control-lg"
                                                            onChange={(e) => {
                                                                setconnumber(e.target.value);
                                                            }}
                                                        />
                                                    </div>

                                                    <div className="form-outline mb-2">
                                                        <label className="form-label" htmlFor="password">Password</label>
                                                        <input type="password" required id="password" className="form-control form-control-lg"
                                                        onChange={(e) => {
                                                            setpassword(e.target.value);
                                                        }}
                                                        />
                                                    </div>

                                                    <div className="form-outline mb-2">
                                                        <label className="form-label" htmlFor="reppassword">Repeat your password</label>
                                                        <input type="text" required id="reppassword" className="form-control form-control-lg"
                                                        onChange={(e) => {
                                                            setreppassword(e.target.value);
                                                        }}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-lg-6">
                                                    
                                                    <div className="form-outline mb-2">
                                                    <label className="form-label" htmlFor="gender">Gender</label>
                                                    <select required id="gender" className="form-control form-control-lg"
                                                        onChange={(e) => {
                                                            setgender(e.target.value);
                                                        }}
                                                    >
                                                        <option value="">Select Gender</option>
                                                        <option value="Male">Male</option>
                                                        <option value="Female">Female</option>
                                                        <option value="other">Other</option>
                                                    </select>
                                                </div>
                                                
                                                    <div className="form-outline mb-2">
                                                    <label className="form-label" htmlFor="bloodGroup">Blood Group</label>
                                                    <select required id="bloodGroup" className="form-control form-control-lg"
                                                        onChange={(e) => {
                                                            setbloodGroup(e.target.value);
                                                        }}
                                                    >
                                                        <option value="">Select Blood Group</option>
                                                        <option value="A+">A+</option>
                                                        <option value="A-">A-</option>
                                                        <option value="B+">B+</option>
                                                        <option value="B-">B-</option>
                                                        <option value="AB+">AB+</option>
                                                        <option value="AB-">AB-</option>
                                                        <option value="O+">O+</option>
                                                        <option value="O-">O-</option>
                                                        
                                                    </select>
                                                    </div>
                                                    

                                                    <div className="form-outline mb-2">
                                                        <label className="form-label" htmlFor="age">Age</label>
                                                        <input type="number" required id="age" className="form-control form-control-lg"
                                                            onChange={(e) => {
                                                                setage(e.target.value);
                                                            }}
                                                        />
                                                    </div>


                                                    <div className="form-outline mb-2">
                                                        <label className="form-label" htmlFor="address">Address</label>
                                                        <input type="text" required id="address" className="form-control form-control-lg"
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

                                           
                                            <div className="form-check d-flex mt-3"  style={{fontSize:"35px"}}>
                                                <input className="form-check-input" type="checkbox" value="" id="form2Example3cg" style={{transform: "scale(1.5)"}} required/>
                                                <label className="form-check-label" htmlFor="form2Example3g"  style={{fontSize:"15px",marginLeft:"5px"}}>
                                                    I agree to all statements in <u data-toggle="modal" data-target="#termsandconditions" style={{color:"blue"}} >Terms of service</u>
                                                </label>
                                            </div>

                                            {/* model open*/}
                                            <div class="modal fade xl" id="termsandconditions" tabindex="1" role="dialog" aria-labelledby="termsandconditionsLabel" aria-hidden="true">
                                            <div class="modal-dialog modal-lg" role="document">
                                                <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title"  id="termsandconditionsLabel">Terms and Conditions</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
    
                                                <ol>
                                                    <li>
                                                        <strong>Acceptance of Terms:</strong> By registering on this platform, you agree to comply with and be bound by these terms and conditions.
                                                    </li>
                                                    <li>
                                                        <strong>User Account:</strong> You are responsible for maintaining the confidentiality of your account and password. Any activities that occur under your account are your responsibility.
                                                    </li>
                                                    <li>
                                                        <strong>Use of Information:</strong> We may collect personal information during the registration process. This information will be used in accordance with our <a href="privacy_policy.html">Privacy Policy</a>.
                                                    </li>
                                                    <li>
                                                        <strong>Prohibited Actions:</strong> You agree not to engage in any prohibited actions while using our platform, including but not limited to:
                                                        <ul>
                                                            <li>Violating any laws or regulations.</li>
                                                            <li>Transmitting spam, viruses, or any code of a destructive nature.</li>
                                                            <li>Attempting to access accounts or data that you are not authorized to access.</li>
                                                        </ul>
                                                    </li>

                                                    <li>
                                                        <strong>Intellectual Property:</strong> All content and materials available on the platform are protected by intellectual property rights. You agree not to use, reproduce, distribute, or create derivative works based on this content without proper authorization.
                                                    </li>

                                                    <li>
                                                        <strong>Modification of Terms:</strong> We reserve the right to modify these terms and conditions at any time without prior notice. It is your responsibility to review these terms periodically for changes.
                                                    </li>

                                                    <li>
                                                        <strong>Termination:</strong> We reserve the right to terminate or suspend your account without prior notice if we believe you have violated these terms and conditions.
                                                    </li>

                                                    <li>
                                                        <strong>Disclaimer of Warranties:</strong> The platform is provided "as is" without any warranties, express or implied. We do not guarantee the accuracy, completeness, or reliability of any content or materials on the platform.
                                                    </li>

                                                    
                                                </ol>
                                                </div>
                                                <div class="modal-footer">
                                                    By checking the box and proceeding with registration, you acknowledge that you have read, understood, and agree to abide by these terms and conditions.
                                                    
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                            {/* model close*/}
                                            

                                            <center>
                                            <div className="d-grid gap-2 xl">
                                                <Button type="submit" className="btn btn-success btn-xl center mb-4">Register</Button>
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

