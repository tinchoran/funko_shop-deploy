const mainControllers = {
    home: (req, res) => res.send("Route for home view"),
    contact: (req, res) => res.send("Route for contact view"),
    about: (req, res) => res.send("Route for About view"),
    faqs: (req, res) => res.send("Route for FAQs view")
};

module.exports = mainControllers