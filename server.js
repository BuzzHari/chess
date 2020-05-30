const express = require("express");
const mongoose = require("mongoose");
const {connectDB, disconnectDB} = require("./config/db");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");

const app = express();


// Connect to DB.
connectDB();

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());


// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", require("./routes/api/users"));


const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=> console.log(`Server up and running on port ${PORT}!`));

/*
 *
 *  Do npm install
 *  Do npm run client-install
 *  To run in dev mode : npm run dev
 *  
 *
 */
