const router = require("express").Router();

let Patient = require('../models/Patients');

router.route('/add').post((req,res) => {
    
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const gender = req.body.gender;
    const bloodGroup = req.body.bloodGroup;
    const address = req.body.address;
    const notes = req.body.notes;

    const newPatient = new Patient({

        name,
        email,
        password,
        gender,
        bloodGroup,
        address,
        notes
    })

    newPatient.save().then(() => {
        res.json("Patient Added")
    }).catch((err)=>{
        console.log(err); 
    })

});

module.exports = router;