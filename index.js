require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cron=require('node-cron');
const fetchAndStoreCryptoJob=require('./controllers/fetchAndStoreCryptoJob');
const getLatestCrypto=require('./routes/latestCrypto');
const app = express();

const fetchAndStore = require("./routes/fetchAndStore");
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use("/", fetchAndStore);
app.use("/stats", getLatestCrypto);


cron.schedule('0 */2 * * *', async () => {
    console.log("Running background job to fetch and store crypto data...");
    await fetchAndStoreCryptoJob();
  });

app.listen(3000, () => {
  console.log("server started");
});
