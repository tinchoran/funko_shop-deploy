const { getOne, getLicenses } = require("../models/productModel");
const { createProduct, getAllProducts, getCategories, deleteProduct } = require("../services/productServices")

const adminControllers = {


    adminHome: async (req, res) => {

        const result = await getAllProducts();
        const categories = await getCategories();

        res.render("admin/admin", {
            view: {
                values: result.info,
                categories: categories.info,
                windowName: "Panel de Control",
                styles: ["../styles/index.css", "../styles/adminStyles/admin.css"],
                scripts: [],
                type: "admin"
            }
        })


    } ,


    getCreateElementView: async (req, res) => {
        const categories = await getCategories();
        const licenses = await getLicenses();

        res.render("admin/create", {
            view:{
                windowName: "Crear Producto",
                categories: categories.info,
                licenses: licenses.info,
                styles: ["../../styles/index.css", "../../styles/adminStyles/create.css"],
                scripts: []
            }
        })
    },


    createElement: async (req,  res) => {

        const item = req.body;
 
        const files = req.files;

        const result = await createProduct(item, files);
        
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


    deleteItem: async (req, res) => {
        
        const id = req.params.id;

        await deleteProduct(id);

        res.redirect("/admin")
    } 


};

module.exports = adminControllers;