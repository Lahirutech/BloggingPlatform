const express = require("express");
const router = express.Router();
const { signup } = require("../controllers/auth");

const {runValidation}=require("../validators/")
const {userSignupValidator}=require("../validators/auth")

// routes
router.post("/signup", userSignupValidator,runValidation,signup);

module.exports = router;
