const express = require("express");
const app = express();
require("dotenv/config");
const { default: mongoose } = require("mongoose");


const cors = require("cors");





app.use(cors({origin : true}));
app.use(express.json());


app.get("/", (req, res) => {
    return res.json("Hello mugi....")
})



// user authentication routes
const userRoute = require("./routes/auth");
app.use("/api/users/", userRoute);

// Artist route
const artistsRoute = require("./routes/artists");
app.use("/api/artists/", artistsRoute);

// Album route
const albumRoute = require("./routes/albums");
app.use("/api/albums/", albumRoute);

// Songs route
const songRoute = require("./routes/songs");

app.use("/api/songs/", songRoute);



mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true });
mongoose.connection
  .once("open", () => console.log("Connected"))
  .on("error", (error) => {
    console.log(`Error : ${error}`);
  });




app.listen(4000, () => console.log("listening to port 4000"));