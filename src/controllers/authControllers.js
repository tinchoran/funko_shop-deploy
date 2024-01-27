require("dotenv").config();
const adminCredentials = {
    email: process.env.ADMIN_MAIL,
    password: process.env.ADMIN_PASS
}

module.exports = {

    loginView: (req, res) => {
        res.render("auth/login", {
            view:{
                values: {},
                styles: ["../styles/index.css", "../../styles/login.css"],
                scripts: [""],
                windowName: "Login"
            }
        })
    },

    logUserIn: (req, res) => {

        const { email, password } = req.body;
        const emailValidation = adminCredentials.email == email;
        const passwordValidation = adminCredentials.password == password;

        req.session.isLogged = emailValidation && passwordValidation ? true : false;

        if (req.session.isLogged) {
            return res.redirect("/admin")
        }

        return res.status(401).send("Credenciales inválidas")


    },
    getRegisterView: (req, res) => res.send("Route for getting the Register View"),

    registerUser: (req, res) => res.send("Route for register an user"),

    logOut: (req, res) => {
        req.session.isLogged = false;
        res.send("Sesión finalizada con éxito")
    }
    
}

