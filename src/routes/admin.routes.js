const express = require("express");
const router = express.Router();
const adminControllers = require("../controllers/adminControllers")

router.get("/", adminControllers.adminHome)

router.get("/create", adminControllers.getCreateElementView)

router.post("/create", adminControllers.createElement)

router.get("/edit/:id", adminControllers.getEditableItem)

router.put("/edit/:id", adminControllers.editItem)

router.delete("/delete/:id", adminControllers.deleteItem)


module.exports = router;