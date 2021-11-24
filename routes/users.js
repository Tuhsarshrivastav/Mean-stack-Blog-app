const express = require("express");
const userModel = require("../models/user");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  const userDetails = new userModel({
    name: "Vikas",
    email: "vikas@gmail.com",
    password: "vikas@123",
  });

  userDetails.save(function (err, req1) {
    if (err) throw err;

    res.render("index", { title: "User Data Inserted" });
  });
});

module.exports = router;
