const express = require("express");
const userRoutes = require("./routes/userRoutes");
const app = express();
// middleware
app.use(express.json());
app.use("/api", userRoutes);
const port = 5000;
app.listen(port, () => {
  console.log("Yourr server is running on port number = " + port);
});
