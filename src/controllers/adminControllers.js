const { getOne } = require("../models/productModel");
const { createProduct } = require("../services/productServices")

const adminControllers = {


    adminHome: (req, res)=> res.send("Route for admin View"),


    getCreateElementView: (req, res) => {
        res.render("admin/create", {
            view:{
                windowName: "Crear Producto",
                styles: ["../../styles/index.css"],
            }
        })
    },


    createElement: async (req,  res) => {

        const item = req.body;
        console.log("item!!!!!:::", item)

        const files = req.files;
        console.log(files)

        const result = await createProduct(item, files);
        
        console.log(result);

        res.redirect("/admin")
    },


    getEditableItem: async (req, res) => {

        const id = req.params.id;

        const data = await getOne({product_id: Number(id)});

        const product = data.info[0];

        console.log(product);

        res.render("admin/modify", {
            view:{
                windowName: "Editar Ítem",
                styles: ["../../styles/index.css"],
                data: product
            }
        }) 

    },


    editItem: (req, res)=> res.send("Route for edit an item by id"),


    deleteItem: (req, res)=> res.send("Route for delete an item by id")


};

module.exports = adminControllers;