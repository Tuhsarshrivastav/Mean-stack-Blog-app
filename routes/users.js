const express = require("express");
const userModel = require("../models/user");
const router = express.Router();

/* GET users listing. */
router.post("/register", function (req, res, next) {
  var userDetails = new userModel({
    name: req.body.Name,
    email: req.body.Email,
    password: req.body.Password,
  });

  userDetails
    .save()
    .then((doc) => {
      res.status(201).json({
        message: "Inserted Successfully",
        results: doc,
      });
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
