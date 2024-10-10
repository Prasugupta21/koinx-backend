const express = require("express");
const fetchAndStoreCryptoJob = require('../controllers/fetchAndStoreCryptoJob')
const router = express.Router();

router.get("/", fetchAndStoreCryptoJob);

module.exports = router;
