const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise; // Used to make mongoose use ES6 Promises instead of deprecated mpromises
mongoose
    .connect(
        "mongodb://127.0.0.1:27017/nature-test"
        /* , { useNewUrlParser: true, }
         */
    ) //used in older versions of mongoose to switch to new Url Parser
    .then(() => {
        console.log("Connected to MongoDB Database!!!");
    })
    .catch((err) => {
        console.log("Could not connect to Database! Error - ", err);
        process.exit();
    });

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.json({ message: "Server is running" });
});

require("./routes/app.route.js")(app);

let port = 8080;
app.listen(8080, () => {
    console.log(`Server started at ${port}`);
});
