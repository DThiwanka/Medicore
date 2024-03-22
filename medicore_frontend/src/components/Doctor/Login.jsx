import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

function Login() {
    const history = useNavigate();

    const [doccode, setDoccode] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formError, setFormError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleLogin(e) {
        e.preventDefault();

        try {
            setLoading(true);

            const { data, status } = await axios.post('https://medicore.onrender.com/doctor/login', {
                doccode,
                email,
                password,
            });

            if (status === 200) {
                localStorage.setItem("localData", JSON.stringify(data));
                // history({ state: { id: _id } });
                window.location.href = `/doctor/enc/profile/`;
            } else {
                setFormError('Invalid Credentials.');
            }
        } catch (error) {
            console.log(error);
            setFormError('Invalid Credentials.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ maxWidth: '500px', width: '100%', padding: '50px', borderRadius: '10px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', backgroundColor: '#fff', color: '#2c3e50' }}>
                <h2 style={{ textAlign: 'center', color: '#3498db', fontSize: '30px', marginBottom: '40px' }}>Doctor Login</h2>
                <form action='post'>
                    <div style={{ marginBottom: '20px' }}>
                        <label htmlFor="doccode" style={{ display: 'block', marginBottom: '12px', color: '#3498db', fontSize: '18px' }}>Doctor Code</label>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input
                                type="text"
                                id="doccode"
                                style={{ width: '100%', padding: '18px', fontSize: '18px', border: '2px solid #3498db', borderRadius: '6px', backgroundColor: '#ecf0f1', color: '#34495e' }}
                                value={doccode}
                                onChange={(e) => setDoccode(e.target.value)}
                            />
                            
                        </div>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label htmlFor="email" style={{ display: 'block', marginBottom: '12px', color: '#3498db', fontSize: '18px' }}>Email</label>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input
                                type="email"
                                id="email"
                                style={{ width: '100%', padding: '15px', fontSize: '18px', border: '2px solid #3498db', borderRadius: '6px', backgroundColor: '#ecf0f1', color: '#34495e' }}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            
                        </div>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label htmlFor="password" style={{ display: 'block', marginBottom: '12px', color: '#3498db', fontSize: '18px' }}>Password</label>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input
                                type="password"
                                id="password"
                                style={{ width: '100%', padding: '15px', fontSize: '18px', border: '2px solid #3498db', borderRadius: '6px', backgroundColor: '#ecf0f1', color: '#34495e' }}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            
                        </div>
                    </div>

                    {formError && <div style={{ padding: '15px', marginBottom: '30px', border: '2px solid #e74c3c', borderRadius: '6px', backgroundColor: '#e74c3c', color: '#fff' }}>{formError}</div>}

                    <div style={{ textAlign: 'center' }}>
                        <button
                            type="submit"
                            onClick={handleLogin}
                            style={{ cursor: 'pointer', backgroundColor: '#3498db', color: '#fff', border: 'none', borderRadius: '6px', padding: '18px', fontSize: '18px', width: '100%' }}
                            disabled={loading}
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </div>

                    <p style={{ textAlign: 'center', marginTop: '20px', marginBottom: '0', color: '#bdc3c7' }}>
                        Haven't an account? <Link to="/register" style={{ fontWeight: 'bold', color: '#34495e' }}><u>Register here</u></Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;
