const adminControllers = {


    adminHome: (req, res)=> res.send("Route for admin View"),

    getCreateElementView: (req, res) => res.send("Route for the create element view"),

    createElement: (req, res) => res.send("Route for create an element"),

    getEditableItem: (req, res) => res.send("Route for get an item to edit by its id"),

    editItem: (req, res)=> res.send("Route for edit an item by id"),

    deleteItem: (req, res)=> res.send("Route for delete an item by id")


};

module.exports = adminControllers;