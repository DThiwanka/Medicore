const router = require("express").Router();

let Admin = require('../models/Admin');


router.route('/').get((req, res) => {

    Admin.find().then((admins) => {
        res.json(admins)
    }).catch((err) => {
        console.log(err)
    })

})


router.route('/get/:id').get(async (req, res) => {
    let adId = req.params.id;

    const ad = await Admin.findById(adId)
        // await Patient.findOne(email);

        .then((admin) => {
            res.status(200).send({ status: "User Fetched!", admin })
        }).catch(() => {
            console.log(err.message);
            res.status(500).send({ status: "Error with get Admin!", error: err.message })
        })

})


//Remove After 
router.route('/add').post((req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const role = req.body.role;

    const newAdmin = new Admin({

        name,
        email,
        password,
        role,
    })

    newAdmin.save().then(() => {
        res.json("Admin Saved!")
    }).catch((err) => {
        console.log(err);
    })

});

//Login
// API Route for Login
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const adm = await Admin.findOne({ email: email, password: password });

        if (adm) {
            const response = {

                _id: adm._id,
                name: adm.name,
                email: adm.email,
                role: adm.role,
                // //password,
                // gender: pat.gender,
                // bloodGroup: pat.bloodGroup,
                // address: pat.address,
                //notes: pat.notes,

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