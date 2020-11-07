const express = require("express");
const router = express.Router();
const {
  signup,
  signin,
  signout,
  requireSignin,
} = require("../controllers/auth");

const { runValidation } = require("../validators/");
const {
  userSigninValidator,
  userSignupValidator,
} = require("../validators/auth");

// routes
router.post("/signup", userSignupValidator, runValidation, signup);
router.post("/signin", userSigninValidator, runValidation, signin);
router.get("/signout", signout);

router.get("/secret", requireSignin, (req, res) => {
  return res.json({ msg: "secret" });
});

module.exports = router;
