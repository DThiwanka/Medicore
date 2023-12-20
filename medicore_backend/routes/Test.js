const router = require("express").Router();

let Test = require('../models/TestModel');

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


router.route('/').get((req, res) => {

    Test.find().then((tests) => {
        res.json(tests)
    }).catch((err) => {
        console.log(err)
    })

})




//Remove After 
router.route('/add').post(async (req, res) => {


    const salt = await bcrypt.genSalt(10);
    let secpass = await bcrypt.hash(req.body.name,salt);
    
    const name = secpass;
    const date = req.body.date;
    const time = req.body.time;

    const newTest = new Test({

        name,
        date,
        time,
        
    })

    newTest.save().then(() => {
        res.json("TEst Checked!")
    }).catch((err) => {
        console.log(err);
    })

});


module.exports = router;