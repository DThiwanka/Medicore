import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function NewGetAll(props) {
    const [patient, Setpatient] = useState({});

    const { id } = JSON.parse(localStorage.getItem('currentUser'));
    console.log(id)
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:8070/patient/get/${id}`)
            .then((res) => {
                Setpatient(res.data);
            })
            .catch(() => {
                console.log('Error from NewGetAll',err);
            });
    }, [id]);

    const onDeleteClick = (id) => {
        axios
            .delete(`http://localhost:8070/patient/delete/${id}`)
            .then((res) => {
                navigate('/');
            })
            .catch((err) => {
                console.log('Error form ShowBookDetails_deleteClick');
            });
    };

    const BookItem = (
        <div>
            <table className='table table-hover table-dark'>
                <tbody>
                    <tr>
                        <th scope='row'>1</th>
                        <td>Name</td>
                        <td>{patient.name}</td>
                    </tr>
                    <tr>
                        <th scope='row'>2</th>
                        <td>Email</td>
                        <td>{patient.email}</td>
                    </tr>
                    <tr>
                        <th scope='row'>3</th>
                        <td>connumber</td>
                        <td>{patient.connumber}</td>
                    </tr>
                    <tr>
                        <th scope='row'>4</th>
                        <td>address</td>
                        <td>{patient.address}</td>
                    </tr>
                    <tr>
                        <th scope='row'>5</th>
                        <td>age</td>
                        <td>{patient.age}</td>
                    </tr>
                    <tr>
                        <th scope='row'>6</th>
                        <td>notes</td>
                        <td>{patient.notes}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

    return (
        <div className='NewGetAll'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-10 m-auto'>
                        <br /> <br />
                        <Link to='/' className='btn btn-outline-warning float-left'>
                            Show patient List
                        </Link>
                    </div>
                    <br />
                    <div className='col-md-8 m-auto'>
                        <h1 className='display-4 text-center'>patient's Record</h1>
                        <p className='lead text-center'>View patient's Info</p>
                        <hr /> <br />
                    </div>
                    {/* <div className='col-md-10 m-auto'>{BookItem}</div> */}
                    <div className='col-md-6 m-auto'>
                        <button
                            type='button'
                            className='btn btn-outline-danger btn-lg btn-block'
                            onClick={() => {
                                onDeleteClick(patient._id);
                            }}
                        >
                            Delete patient
                        </button>
                    </div>
                    <div className='col-md-6 m-auto'>
                        <Link
                            to={`/edit-patient/${patient._id}`}
                            className='btn btn-outline-info btn-lg btn-block'
                        >
                            Edit patient
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewGetAll;