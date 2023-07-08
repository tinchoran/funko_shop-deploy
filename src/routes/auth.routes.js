const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/authControllers")

router.get("/login", authControllers.getLoginView)
router.post("/login", authControllers.logUserIn)

router.get("/register", authControllers.getRegisterView)
router.post("/register", authControllers.getRegisterView)

module.exports = router;