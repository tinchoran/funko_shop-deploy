const shopControllers = {
    shop: (req, res)=> res.send("Route for Shop view"),
    getItem: (req, res)=> res.send(`Ruta para buscar y traer un item desde un id proporcionado: ${req.params.id}`),
    createItem: (req, res)=> res.send("Route for add the current item to the shop cart"),
    getCart: (req, res)=> res.send("Route for Cart view"),
    addToCart: (req, res)=> res.send("Route for go to checkout page")
};

module.exports = shopControllers;