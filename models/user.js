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
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    index: {
      unique: true,
    },
    match:
      /[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const userModel = mongoose.model("Users", userSchema);
module.exports = userModel;
