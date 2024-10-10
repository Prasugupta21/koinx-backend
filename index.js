require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();

const fetchAndStore = require("./routes/fetchAndStore");
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", fetchAndStore);

app.listen(3000, () => {
  console.log("server started");
});
