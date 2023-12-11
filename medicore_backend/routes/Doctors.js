const router = require("express").Router();

let Doctor = require('../models/Doctors');

router.route('/add').post((req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const gender = req.body.gender;
    const specialization = req.body.specialization;
    const assignedPatients = req.body.assignedPatients;
    const docNotes = req.body.docNotes;

    const newDoctor = new Doctor({

        name,
        email,
        password,
        gender,
        specialization,
        assignedPatients,
        docNotes
    })

    newDoctor.save().then(() => {
        res.json("Doctor Saved!")
    }).catch((err) => {
        console.log(err);
    })

});

router.route('/').get((req, res) => {

    Doctor.find().then((doctors) => {
        res.json(doctors)
    }).catch((err) => {
        console.log(err)
    })

})

router.route('/update/:id').post(async (req, res) => {
    let docID = req.params.id;

    const { name, email, password, gender, specialization, assignedPatients, docNotes } = req.body;

    const updateDoctor = {
        name,
        email,
        password,
        gender,
        specialization,
        assignedPatients,
        docNotes
    }

    const update = await Doctor.findByIdAndUpdate(docID, updateDoctor)
        .then(() => {
            res.status(200).send({ status: "Doctor Updated" })

        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with Updating Data", error: err.message });
        })
})

router.route('/delete/:id').delete(async (req, res) => {
    let docID = req.params.id;

    await Doctor.findByIdAndDelete(docID)
        .then(() => {
            res.status(200).send({ status: "Doctor Deleted!" })
        }).catch((err) => {
            console.log(err.message),
                res.status(500).send({ status: "Error With Delete Doctor!", error: err.message });
        })
})


router.route('/get/:id').get(async (req, res) => {
    let docID = req.params.id;

    const pat = await Doctor.findById(patID)
        // await Patient.findOne(email);

        .then((doctor) => {
            res.status(200).send({ status: "User Fetched!", doctor })
        }).catch(() => {
            console.log(err.message);
            res.status(500).send({ status: "Error with get User!", error: err.message })
        })

})


module.exports = router;