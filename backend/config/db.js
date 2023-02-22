const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("Mongodb connected");
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = connect;
