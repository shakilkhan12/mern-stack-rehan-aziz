const express = require("express");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");
const connect = require("./config/db");
const app = express();

// mongodb connection
connect();
// middleware
app.use(express.json());
app.use("/api", userRoutes);
const port = 5000;
app.listen(port, () => {
  console.log("Yourr server is running on port number = " + port);
});
