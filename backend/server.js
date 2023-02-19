const express = require("express");
const app = express();
app.get("/", (req, res) => {
  //   res.send(
  //     "Helloo again and again Assistant Professor Mr.Rehan Ullah Khan & Haji Muhammad Aziz ullah Khan"
  //   );
  return res.status(200).json({ name: "rehan" });
});
const port = 5000;
app.listen(port, () => {
  console.log("Yourr server is running on port number = " + port);
});
