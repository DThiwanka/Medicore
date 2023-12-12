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
router.route('/add').post((req, res) => {

    const name = req.body.name;
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