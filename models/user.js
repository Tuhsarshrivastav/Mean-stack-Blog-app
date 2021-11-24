const mongoose = require("mongoose");

const Connected = async () => {
  try {
    await mongoose.connect(process.env.db, { useNewUrlParser: true });
    console.log("Db connected");
  } catch (error) {
    console.log(error);
  }
};
Connected();
// const conn = mongoose.Collection;

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const userModel = mongoose.model("Users", userSchema);
module.exports = userModel;
