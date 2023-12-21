const router = require("express").Router();

let Appointment = require('../models/Appointment');

router.route('/add').post((req, res) => {

    const name = req.body.name;
    const date = req.body.date;
    const reason = req.body.reason;

    const doctor = req.body.doctor;
    const insurance = req.body.insurance;
    const notes = req.body.notes;
    

    const newAppointment = new Appointment({

        name,
        date,
        reason,
        doctor,
        insurance,
        notes,

    })

    newAppointment.save().then(() => {
        res.json("Appointment Added")
    }).catch((err) => {
        console.log(err);
    })

});

router.route('/').get((req, res) => {

    Appointment.find().then((appointment) => {
        res.json(appointment)
    }).catch((err) => {
        console.log(err)
    })

})

router.route('/update/:id').post(async (req, res) => {
    let aptID = req.params.id;

    const { name, date, reason, doctor, insurance, notes} = req.body;

    const updateAppointment = {
        name,
        date,
        reason,
        doctor,
        insurance,
        notes,
    }

    const update = await Appointment.findByIdAndUpdate(aptID, updateAppointment)
        .then(() => {
            res.status(200).send({ status: "Appointment Updated" })

        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with Updating Data", error: err.message });
        })
})

router.route('/delete/:id').delete(async (req, res) => {
    let aptID = req.params.id;

    await Appointment.findByIdAndDelete(aptID)
        .then(() => {
            res.status(200).send({ status: "Appointment Deleted!" })
        }).catch((err) => {
            console.log(err.message),
                res.status(500).send({ status: "Error With Delete Appointment!", error: err.message });
        })
})


router.route('/get/:id').get(async (req, res) => {
    let aptID = req.params.id;

    const pat = await Appointment.findById(aptID)

        .then((appointment) => {
            res.status(200).send({ status: "Appointment Fetched!", appointment })
        }).catch(() => {
            console.log(err.message);
            res.status(500).send({ status: "Error with get Appointment!", error: err.message })
        })

})



module.exports = router;