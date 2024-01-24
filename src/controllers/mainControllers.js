const { getAllProducts, getProductById} = require("../services/productServices")

const mainControllers = {
    home: async (req, res) => {

        

        // }
        res.render("main/home", {
            view: {
                windowName: "Home",
                styles: ["../../styles/index.css"],
                scripts: [""]
            }
        })

    },
    contact: (req, res) => {
        res.render("main/contact", {
            view: {
                windowName: "Contacto",
                styles: [],
                scripts: [""]
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
                styles: [],
                scripts: [""]
            }
        })
    }
};

module.exports = mainControllers