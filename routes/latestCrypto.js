const express = require("express");
const router = express.Router();
const { getLatestCrypto } = require("../controllers/getLatestCrypto");

router.get("/", getLatestCrypto);

module.exports = router;
