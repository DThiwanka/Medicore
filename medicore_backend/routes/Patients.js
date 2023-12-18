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
                createdAt:pat.createdAt

            };
            res.send(response);
        
        } else {
            return res.status(400).json({ message: "Login Failed" });
        }
    } catch (error) {
        return res.status(400).json({ error });
    }
});


module.exports = router;