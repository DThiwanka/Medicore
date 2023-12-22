const router = require("express").Router();

let Patient = require('../models/Patients');

router.route('/add').post((req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const connumber = req.body.connumber;
    const gender = req.body.gender;
    const bloodGroup = req.body.bloodGroup;
    const address = req.body.address;
    const age = req.body.age;
    const notes = req.body.notes;
    const createdAt = req.body.createdAt;
    const appointment = req.body.appointment;
    

    const newPatient = new Patient({

        name,
        email,
        password,
        connumber,
        gender,
        bloodGroup,
        address,
        age,
        notes,
        appointment
        
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

router.route('/update/:id').post(async (req, res) => {
    let patID = req.params.id;

    const { name, email, password, connumber, gender, bloodGroup, address, age, notes } = req.body;

    const updatePatient = {
        name,
        email,
        password,
        connumber,
        gender,
        bloodGroup,
        address,
        age,
        notes
    }

    const update = await Patient.findByIdAndUpdate(patID, updatePatient)
        .then(() => {
        res.status(200).send({ status: "User Updated"})

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
        
        .then((patient) => {
            res.status(200).send({ status: "User Fetched!", patient })
        }).catch(() => {
            console.log(err.message);
            res.status(500).send({ status: "Error with get User!", error: err.message })
        })

})

//Login
// API Route for Login
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const pat = await Patient.findOne({ email: email, password: password });

        if (pat) {
            const response = {

                _id: pat._id,
                name: pat.name,
                email: pat.email,
                //   role: pat.role,
                //password,
                connumber:pat.connumber,
                gender:pat.gender,
                bloodGroup:pat.bloodGroup,
                address: pat.address,
                age:pat.age,
                notes: pat.notes,
                createdAt: pat.createdAt,
                appointment:pat.appointments

            };
            res.send(response);
        
        } else {
            return res.status(400).json({ message: "Login Failed" });
        }
    } catch (error) {
        return res.status(400).json({ error });
    }
});

//////////////////////Appointments//////////////////////////////////////
///

router.route('/addapointment/:id').post(async (req, res) => {
    let patID = req.params.id;

    const { appointment } = req.body;

    const addapointment = {
        appointment,
    }

    const update = await Patient.findByIdAndUpdate(patID, addapointment)
        .then(() => {
            res.status(200).send({ status: "User appointment Updated" })

        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with Updating Data", error: err.message });
        })
})

///
router.route('/addAppointmentz/:id').post(async (req, res) => {
    try {
        const patID = req.params.id;
        const { name, date, time, reason, info, doctor, insurance, notes } = req.body; // Destructure date, time, and reason directly

        const patient = await Patient.findById(patID);

        if (!patient) {
            return res.status(404).json({ status: 'Patient not found' });
        }

        // Assuming appointments is an array field in your Patient model
        patient.appointments.push({ name, date, time, reason, info, doctor, insurance, notes }); // Push the new appointment data as an object

        await patient.save();

        res.status(200).json({ status: 'New appointment added', patient });
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: 'Error adding new appointment', error: err.message });
    }
});


///
////////////////////////////////////////////////////////////////////////

module.exports = router;