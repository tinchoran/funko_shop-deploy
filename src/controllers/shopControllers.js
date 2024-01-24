const { getAllProducts, getProductById, getLicenses, getRelated} = require("../services/productServices");

const shopControllers = {
    shop: async (req, res)=> {
        const result = await getAllProducts();
        const licenseResult = await getLicenses();

        if(result.isError){
             console.log(result.msg);
             res.status(500).send("Hemos tenido un error al consultar los datos");

        }
        res.render("shop/shop", {
            view: {
                values: result.info,
                licenses: licenseResult.info,
                windowName: "Shop",
                styles: ["../styles/index.css", "../styles/shop.css"],
                scripts: [""]
            }
        })
    },

    getItem: async (req, res)=> {
        const id = req.params.id;
        const result = await getProductById(id);
        const licenseResult = await getLicenses();
        const related = await getRelated(result.info[0].license_id);

        if(result.isError){
            console.log(result.msg);
            res.status(500).send("Hemos tenido un error al consultar los datos");
        }
        console.log(related.info.length);
        res.render("shop/item", {
            view: {
               values: result.info[0],
               licenses: licenseResult.info,
               related: related.info,
               windowName: "Item",
               styles: ["/styles/index.css", "/styles/item.css"],
               scripts: ["/js/item.js", "/js/glide.js"],
               arregloLogo: ["../"]
            }
        })
    },

    createItem: (req, res)=> res.send("Route for add the current item to the shop cart"),
    getCart: (req, res)=> res.send("Route for Cart view"),
    addToCart: (req, res)=> res.send("Route for go to checkout page")
};

module.exports = shopControllers;