import React from 'react'

function UpdateAppointment() {
    
    const { name , _id } = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : '';
    console.log(name);
    console.log(_id); 

    return (
        <div><h1>{name}</h1></div>
    )
}

export default UpdateAppointment