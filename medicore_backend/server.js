const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
require("dotenv").config(); 

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;


mongoose.connect(URL, {
    // useCreateIndex: true,
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useFindAndVerify: false
});


const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongo Db Connected");  
})


const patientRouter = require('./routes/Patients');


app.use("/patient", patientRouter);

app.listen(PORT, () => {
    console.log(`Server is Runnig on PORT ${PORT}`)
})