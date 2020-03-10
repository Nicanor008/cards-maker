const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const validateRegisterInput = require("../../validations/register");
const validateLoginInput = require("../../validations/login");
const User = require("../../models/users");
const passport = require("passport");
import { sendMail as resetPassword } from "../../googleservices/reset";
import { sendMail as verifyEmail } from "../../googleservices/email";
import { sendMail as successMail } from "../../googleservices/success";
import { jwtVerify } from "../../validations/jwtService";

router.post("/", (req, res) => {
  const domain = req.protocol + "://" + req.get("host");
  req.body.domain = domain;
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(404).json({ email: "User does not exist" });
    } else {
      const newUser = new User(req.body);
        newUser
        .save()
        .then(user =>
            res.json({
            message:
                "Card has been created successul",
            user
            })
        )
        .catch(err => console.log(err));
    }
  });
});

router.get(
  "/all",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    User.find(function(err, user) {
      if (err) {
        var err = new Error("error occured");
        return next(err);
      }
      res
        .status(200)
        .json({ message: "All users retrived successfully", user });
    });
  }
);

router.put("/reset-password", (req, res) => {
  const domain = req.protocol + "://" + req.get("host");
  req.body.domain = domain;
  const token = req.query.token;
  const Email = jwtVerify(token);
  if (Email.message === "jwt expired Not valid") {
    res.status(400).json({
      message:
        "Request couldnot be completed at the moment request for password reset again"
    });
  }
  User.findOne({ email: Email }).then(user => {
    if (!user) {
      res.status(404).json({ message: "User doesnot exist" });
    } else {
      user.password = req.body.password;
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.password, salt, (err, hash) => {
          if (err) throw err;
          user.password = hash;
          user
            .save()
            .then(user =>
              res.status(200).json({ message: "password was changed", user })
            )
            .catch(err => console.log(err));
        });
        successMail({
          toMail: user.email,
          subject: "Your Password was successfully changed ",
          text: "Kindly Verify your Email address",
          domain: domain,
          Username: user.Username
        });
      });
    }
  });
});

module.exports = router;
