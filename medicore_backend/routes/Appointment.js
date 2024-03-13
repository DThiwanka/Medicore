const router = require("express").Router();

let Appointment = require('../models/Appointment');
const Patient = require("../models/Patients");

router.route('/add').post((req, res) => {

    const name = req.body.name;
    const date = req.body.date;
    const time = req.body.time;
    const reason = req.body.reason;
    const info = req.body.info;
    const doctor = req.body.doctor;
    const insurance = req.body.insurance;
    const notes = req.body.notes;
    const status = req.body.status;
    

    const newAppointment = new Appointment({

        name,
        date,
        time,
        reason,
        info,
        doctor,
        insurance,
        notes,
        status

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

    const { name, date, time, reason, info, doctor, insurance, notes,status} = req.body;

    const updateAppointment = {
        name,
        date,
        time,
        reason,
        info,
        doctor,
        insurance,
        notes,
        status
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

router.route('/all').get(async (req, res) => {
    try {
        // Find all users with appointments
        const usersWithAppointments = await Patient.find({ appointments: { $exists: true, $not: { $size: 0 } } });

        // Extract all appointments from users
        const allAppointments = usersWithAppointments.reduce((appointments, user) => {
            appointments.push(...user.appointments);
            return appointments;
        }, []);

        // Send the appointments as JSON response
        res.json(allAppointments);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;