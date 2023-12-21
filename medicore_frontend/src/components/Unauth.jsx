import React from 'react';
import { useNavigate } from 'react-router-dom';


function logout() {
    window.location.href = "/";
}

function Unauth() {
  return (
      <div className="container d-flex justify-content-center align-items-center vh-100 bg-red">
          <div className="text-center">
              <h1 className="mb-4">401 - Unauthorized</h1>
              <p className="mb-3">We're sorry, but your request is unauthorized.</p>
              <p className="mb-4">Please click the button below to try again.</p>
              <button onClick={logout}  className="btn btn-primary">Home</button>
          </div>
      </div>
  )
}

export default Unauth