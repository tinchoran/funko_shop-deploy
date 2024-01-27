const { getAllProducts, getProductById, getLicenses, getRelated} = require("../services/productServices");

const shopControllers = {
    shop: async (req, res)=> {
        const licenseFilter = Number(req.query.license); 

        const result = await getAllProducts();
        const licenseResult = await getLicenses();

        const millisecondsADay = 86400000
        const newDate = new Date();

        if(result.isError){
             console.log(result.msg);
             res.status(500).send("Hemos tenido un error al consultar los datos");

        }
        res.render("shop/shop", {
            view: {
                millisecondsADay,
                newDate,
                values: result.info,
                licenses: licenseResult.info,
                licenseFilter,
                windowName: "Shop",
                styles: ["../styles/index.css", "../styles/shop.css"],
                scripts: [
                    "https://cdn.jsdelivr.net/npm/iconify-icon@1.0.7/dist/iconify-icon.min.js",
                    "../js/pagination.js"
                ]
            }
        })
    },

    getItem: async (req, res)=> {
        const id = req.params.id;
        const result = await getProductById(id);
        const licenseResult = await getLicenses();
        const related = await getRelated(result.info[0].license_id);

        const millisecondsADay = 86400000
        const newDate = new Date();

        if(result.isError){
            console.log(result.msg);
            res.status(500).send("Hemos tenido un error al consultar los datos");
        }
   
        res.render("shop/item", {
            view: {
               millisecondsADay,
               newDate,
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