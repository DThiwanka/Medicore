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

// router.route('/update/:id').put(async (req, res) => {
//     let patID = req.params.id;
//     // const currentUserData = localStorage.getItem('currentUser');
//     // const patID = JSON.parse(currentUserData)._id;

//     const { name, email, password, connumber, gender, bloodGroup, address, age, notes } = req.body;

//     const updatePatient = {
//         name,
//         email,
//         password,
//         connumber,
//         gender,
//         bloodGroup,
//         address,
//         age,
//         notes
//     }

//     const update = await Patient.findByIdAndUpdate(patID)
//         .then(() => {
//             res.status(200).send({ data: update })

//     }).catch((err) => {
//         console.log(err);
//         res.status(500).send({ status: "Error with Updating Data", error: err.message });
//     })
// })

router.route('/delete/:id').delete(async (req, res) => {
    let patID = req.params.id;

    await Patient.findByIdAndDelete(patID)
        .then(() => {
            res.status(200).send({ status: "User Deleted!" },)
        }).catch((err) => {
            console.log(err.message),
                res.status(500).send({ status: "Error With Delete User!", error: err.message });
        })
})

//
router.route("/update/:id").put(async (req, res) => {
    let _id = req.params.id;
    const { name, email, password, connumber, gender, bloodGroup, address, age, notes } = req.body;

    const updatePatient = {
        _id,
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
    const uppat = await Patient.findByIdAndUpdate(_id, updatePatient)
    res.status(200).send({ data: uppat });


})
//


router.route('/get/:id').get(async (req, res) => {
    let patID = req.params.id;

    const pat = await Patient.findById(patID)
        // await Patient.findOne(email);
        
        .then((patient) => {
            res.status(200).send({ status: "User Fetched!", patient })
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with get User!", err })
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

// router.route('/addapointment/:id').post(async (req, res) => {
//     let patID = req.params.id;

//     const { appointment } = req.body;

//     const addapointment = {
//         appointment,
//     }

//     const update = await Patient.findByIdAndUpdate(patID, addapointment)
//         .then(() => {
//             res.status(200).send({ status: "User appointment Updated" })

//         }).catch((err) => {
//             console.log(err);
//             res.status(500).send({ status: "Error with Updating Data", error: err.message });
//         })
// })

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

router.route('/appointmentz/:id').get(async (req, res) => {
    let patID = req.params.id;
    const appointment = req.params.appointments;

    const pat = await Patient.findById(patID).populate('appointments')
        // await Patient.findOne(email);

        .then((patient) => {
            //res.status(200).send({ status: "User Fetched!", patient })
            res.status(200)
                .send({status:patient.name,appointments:patient.appointments})
        }).catch(() => {
            console.log(err.message);
            res.status(500).send({ status: "Error with get User!", error: err.message })
        })

})

//Appointment get
router.route('/appointmentz/details/:id').get(async (req, res) => {
    let appId = req.params.id;

    const app = await Patient.findById(appId.appointment)
        

        .then((appointment) => {
            res.status(200).send({ status: "User Fetched!", appointment })
        }).catch(() => {
            console.log(err.message);
            res.status(500).send({ status: "Error with get User!", error: err.message })
        })

})

////Get One Appointment Under User ID

router.get('/appointments/:patientId/:appointmentId', async (req, res) => {
    try {
        const { patientId, appointmentId } = req.params;

        // Assuming you have a 'User' model with an 'appointments' field
        const patient = await Patient.findById(patientId);

        if (!patient) {
            return res.status(404).json({ error: 'patient not found' });
        }

        const appointment = patient.appointments.find(
            (appointment) => appointment._id.toString() === appointmentId
        );

        if (!appointment) {
            return res.status(404).json({ error: 'Appointment not found' });
        }

        // Return the appointment details
        res.status(200).json({ appointment });

    } catch (error) {
        console.error('Error fetching appointment:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


////Delete One Appointment Under User ID
router.delete('/appointments/:patientId/:appointmentId', async (req, res) => {
    try {
        const { patientId, appointmentId } = req.params;

        // Assuming you have a 'User' model with an 'appointments' field
        const patient = await Patient.findById(patientId);

        if (!patient) {
            return res.status(404).json({ error: 'Patient not found' });
        }

        const appointmentIndex = patient.appointments.findIndex(
            (appointment) => appointment._id.toString() === appointmentId
        );

        if (appointmentIndex === -1) {
            return res.status(404).json({ error: 'Appointment not found' });
        }

        // Remove the appointment from the appointments array
        patient.appointments.splice(appointmentIndex, 1);
        await patient.save();

        res.status(200).json({ message: 'Appointment deleted successfully' });
    } catch (error) {
        console.error('Error deleting appointment:', error);
        res.status(500).json({ error: 'Internal server error' });

    }
});


///
////////////////////////////////////////////////////////////////////////

module.exports = router;