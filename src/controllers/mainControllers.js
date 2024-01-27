const { getAllProducts, getProductById, getLicenses} = require("../services/productServices")

const mainControllers = {
    home: async (req, res) => {

        const result = await getAllProducts();
        const licenses = await getLicenses();

        const millisecondsADay = 86400000
        const newDate = new Date();
        
    
        res.render("main/home", {
            view: {
                millisecondsADay, //Estas dos primeras las pasamos para determinar si poner el span "Nuevo" o no.
                newDate,        //Si pasaron mas de 15 días de creadas no serán consideradas como "Nuevos"
                result: result.info,
                licenses: licenses.info,
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