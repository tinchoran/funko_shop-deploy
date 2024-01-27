const { getOne, getLicenses } = require("../models/productModel");
const { createProduct, getAllProducts, modifyProduct, getCategories, deleteProduct, getAllAdmin } = require("../services/productServices")

const adminControllers = {


    adminHome: async (req, res) => {

        const result = await getAllAdmin();
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

        const result = await getOne({product_id: Number(id)});
        const categories = await getCategories();
        const licenses = await getLicenses();

        const cuotas = [0, 3, 6, 9, 12, 18, 24]

        res.render("admin/modify", {
            view:{
                categories: categories.info,
                licenses: licenses.info,
                windowName: "Editar Ítem",
                cuotas,
                styles: ["../../styles/index.css", "../../styles/adminStyles/create.css"],
                result: result.info[0],
                scripts: [""]
            }
        }) 

    },


    editItem: async (req, res) => {
        const id = req.params.id;
        const item = req.body;
        console.log(item);
        const result = await modifyProduct(item, id)
        console.log(result);
        res.redirect("/admin")
    },


    deleteItem: async (req, res) => {
        
        const id = req.params.id;

        await deleteProduct(id);

        res.redirect("/admin")
    } 


};

module.exports = adminControllers;