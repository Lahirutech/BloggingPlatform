const express = require("express");
const router = express.Router();
const { signup } = require("../controllers/auth");

const {runValidation}=require("../validators/")
const {userSigninValidator,userSignupValidator}=require("../validators/auth")

// routes
router.post("/signup", userSignupValidator,runValidation,signup);
router.post("/signin", userSigninValidator,runValidation,signin);

module.exports = router;
