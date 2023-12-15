const express = require("express");
const router = express.Router();
const { getimage } = require("../controllers/getimages");

router.post("/promt", getimage);


module.exports = router