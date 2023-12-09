const router = require("express").Router();

let Patient = require('../models/Patients');

router.route('/add').post((req, res) => {

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
    }).catch((err) => {
        console.log(err);
    })

});

router.route('/').get((req, res) => {

    Patient.find().then((patients) => {
        res.json(patients)
    }).catch((err) => {
        console.log(err)
    })

})

router.route('/update/:id').put(async (req, res) => {
    let patID = req.params.id;

    const { name, email, password, gender, bloodGroup, address, notes } = req.body;

    const updatePatient = {
        name,
        email,
        password,
        gender,
        bloodGroup,
        address,
        notes
    }

    const update = await Patient.findByIdAndUpdate(patID, updatePatient).then(() => {
        res.status(200).send({ status: "User Updated", user: update })

    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with Updating Data", error: err.message });
    })
})

router.route('/delete/:id').delete(async (req, res) => {
    let patID = req.params.id;

    await Patient.findByIdAndDelete(patID)
        .then(() => {
            res.status(200).send({ status: "User Deleted!" })
        }).catch((err) => {
            console.log(err.message),
                res.status(500).send({ status: "Error With Delete User!", error: err.message });
        })
})


router.route('/get/:id').get(async (req, res) => {
    let patID = req.params.id;

    const pat = await Patient.findById(patID)
        // await Patient.findOne(email);
        .then(() => {
            res.status(200).send({ status: "User Fetched!", data: pat })
        }).catch(() => {
            console.log(err.message);
            res.status(500).send({ status: "Error with get User!", error: err.message })
        })

})


module.exports = router;