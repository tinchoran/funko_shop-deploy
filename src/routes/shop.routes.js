const express = require("express");
const router = express.Router();
const shopControllers = require("../controllers/shopControllers")


router.get("/", shopControllers.shop)

router.get("/item/:id", shopControllers.getItem)

router.post("/item/:id/add", shopControllers.createItem)

router.get("/cart", shopControllers.getCart)

router.post("/cart", shopControllers.addToCart)


module.exports = router;
