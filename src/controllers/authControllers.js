const authControllers = {


    getLoginView: (req, res) => res.send("Route for getting the login view"),

    logUserIn: (req, res) => res.send("Route for Log in"),

    getRegisterView: (req, res) => res.send("Route for getting the Register View"),

    registerUser: (req, res) => res.send("Route for register an user")

    
}

module.exports = authControllers;