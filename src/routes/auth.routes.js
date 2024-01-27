const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/authControllers")
const { body } = require("express-validator");
const validateInput  = require("../middlewares/validator")

const loginValidations = [
    body("email")
        .isEmail()
        .withMessage("Ingrese un correo válido"),
    body("password")
        .isLength({ min: 6 })
        .isAlphanumeric()
        .withMessage("La contraseña debe contener letras y números y al menos 6 caracteres")
]

router.get("/login", authControllers.loginView)
router.post("/login", loginValidations, validateInput, authControllers.logUserIn)

router.get("/register", authControllers.getRegisterView)
router.post("/register", authControllers.getRegisterView)

router.get("/logout", authControllers.logOut)

module.exports = router;