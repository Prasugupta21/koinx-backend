const express = require("express");
const { getLatestCrypto } = require("../controllers/getLatestCrypto");
const router = express.Router();

router.get("/", getLatestCrypto);

module.exports = router;
