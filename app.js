const express = require("express")

const app = express();

app.get("/isruning" , (req,res) => {
    res.send("app is running")
})


module.exports = app ;