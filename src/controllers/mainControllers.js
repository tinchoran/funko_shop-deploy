const { getAllProducts, getProductById} = require("../services/productServices")

const mainControllers = {
    home: async (req, res) => {

        // const result = await getAllProducts();

        // if(result.isError){
        //     console.log(result.msg);
        //     res.status(500).send("Hemos tenido un error al consultar los datos");

        // }else{

        //     res.send({
        //         info: "Route for home view",
        //         data: result.info
        //     });

        // }
        res.render("main/home", {
            view: {
                windowName: "Home",
                styles: ["../../styles/index.css"]
            }
        })

    },
    contact: (req, res) => {
        res.render("main/contact", {
            view: {
                windowName: "Contacto",
                styles: []
            }
        })
    },
    about: (req, res) => {
        res.render("main/about", {
            view: {
                windowName: "Sobre Nosotros",
                styles: []
            }
        })
    },
    faqs: (req, res) => {
        res.render("main/faq", {
            view: {
                windowName: "FAQs",
                styles: []
            }
        })
    }
};

module.exports = mainControllers