const express = require("express");
const app = express();


const cors = require("cors");


app.get("/", (req, res) => {
    return res.json("Hello mugi....")
})

app.listen(4000, () => console.log("listening to port 4000"));