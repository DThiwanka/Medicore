const router = require("express").Router();

let Test = require('../models/TestModel');



router.route('/').get((req, res) => {

    Test.find().then((tests) => {
        res.json(tests)
    }).catch((err) => {
        console.log(err)
    })

})




//Remove After 
router.route('/add').post(async (req, res) => {


   
    
    const name = req.body.name;
    const connumber = req.body.date;
    const gender = req.body.gender;
    const cnumber = req.body.cnumber;
    const appointment = req.body.appointment;

    const newTest = new Test({

        name,
        connumber,
        cnumber,
        gender,
        appointment
        
    })

    newTest.save().then(() => {
        res.json("TEst Checked!")
    }).catch((err) => {
        console.log(err);
    })

});


module.exports = router;