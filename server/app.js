const express = require("express");
const app = express();
var bodyParser = require("body-parser");
var cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

//router imports
const imageroute = require("./routes/getImages");

app.use("/api", imageroute);

//starting server on port 8000
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
