const express = require("express");
const router = express.Router();
const { getStdDeviation } = require("../controllers/stdDeviation");

router.get("/", getStdDeviation);

module.exports = router;
