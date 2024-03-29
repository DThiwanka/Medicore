const router = require("express").Router();

let Doctor = require('../models/Doctors');

router.route('/add').post((req, res) => {

    const doccode = req.body.doccode;
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const gender = req.body.gender;
    const specialization = req.body.specialization;
    const assignedPatients = req.body.assignedPatients;
    const docNotes = req.body.docNotes;
    const department = req.body.department;
    const address = req.body.address;
    const age = req.body.age;
    const degree = req.body.degree;
    const awards = req.body.awards;
    const history = req.body.history;
    const achievements = req.body.achievements;
    const phoneNumber = req.body.phoneNumber;
    const schedule = req.body.schedule;
    const medicalSchool = req.body.medicalSchool;
    const graduationYear = req.body.graduationYear;
    const workExperience = req.body.workExperience;
    const licenseNumber = req.body.licenseNumber;
    const certifications = req.body.certifications;
    const languagesSpoken = req.body.languagesSpoken;
    const acceptedInsurances = req.body.acceptedInsurances;
    const researchInterests = req.body.researchInterests;
    const publications = req.body.publications;
    const professionalMemberships = req.body.professionalMemberships;
    const website = req.body.website;
    const linkedInProfile = req.body.linkedInProfile;
    const emergencyContact = req.body.emergencyContact;
    const hospitalAffiliations = req.body.hospitalAffiliations;



    const newDoctor = new Doctor({

        doccode,
        name,
        email,
        password,
        gender,
        specialization,
        assignedPatients,
        docNotes,
        department,
        address,
        age,
        degree,
        awards,
        history,
        achievements,
        phoneNumber,
        schedule,
        medicalSchool,
        graduationYear,
        workExperience,
        licenseNumber,
        certifications,
        languagesSpoken,
        acceptedInsurances,
        researchInterests,
        publications,
        professionalMemberships,
        website,
        linkedInProfile,
        emergencyContact,
        hospitalAffiliations

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

    const { doccode,
        name,
        email,
        password,
        gender,
        specialization,
        assignedPatients,
        docNotes,
        department,
        address,
        age,
        degree,
        awards,
        history,
        achievements,
        phoneNumber,
        schedule,
        medicalSchool,
        graduationYear,
        workExperience,
        licenseNumber,
        certifications,
        languagesSpoken,
        acceptedInsurances,
        researchInterests,
        publications,
        professionalMemberships,
        website,
        linkedInProfile,
        emergencyContact,
        hospitalAffiliations } = req.body;

    const updateDoctor = {
        doccode,
        name,
        email,
        password,
        gender,
        specialization,
        assignedPatients,
        docNotes,
        department,
        address,
        age,
        degree,
        awards,
        history,
        achievements,
        phoneNumber,
        schedule,
        medicalSchool,
        graduationYear,
        workExperience,
        licenseNumber,
        certifications,
        languagesSpoken,
        acceptedInsurances,
        researchInterests,
        publications,
        professionalMemberships,
        website,
        linkedInProfile,
        emergencyContact,
        hospitalAffiliations
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

    const pat = await Doctor.findById(docID)
        // await Patient.findOne(email);

        .then((doctor) => {
            res.status(200).send({ status: "Doctor Fetched!", doctor })
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with get Doctor!", err })
        })

})

//Login
// API Route for Login
router.post("/login", async (req, res) => {
    const { doccode, email, password } = req.body;

    try {
        const doc = await Doctor.findOne({ doccode: doccode, email: email, password: password, });

        if (doc) {
            const response = {

                _id: doc._id,
                doccode: doc.doccode,
                name: doc.name,
                email: doc.email,
                password: doc.password,
                gender: doc.gender,
                specialization: doc.specialization,
                assignedPatients: doc.assignedPatients,
                docNotes: doc.docNotes,
                department: doc.department,
                address: doc.address,
                age: doc.age,
                details: doc.details,


            };
            res.send(response);

        } else {
            return res.status(400).json({ message: "Login Failed" });
        }
    } catch (error) {
        return res.status(400).json(error.message);
    }
});

module.exports = router;