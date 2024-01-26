const isLogged = (req, res, next) => {
    if(req.session.isLogged){
        return next();
    };

    return res.status(401).send("Necesita estar logueado para ingresar");
};

module.exports = {
    isLogged
}