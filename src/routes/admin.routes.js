const express = require("express");
const router = express.Router();
const adminControllers = require("../controllers/adminControllers")
const uploadFile = require("../middlewares/uploadFiles")

router.get("/", adminControllers.adminHome)

router.get("/create", adminControllers.getCreateElementView)

router.post("/create", uploadFile.array("images", 2), adminControllers.createElement)

router.get("/edit/:id", adminControllers.getEditableItem)

router.put("/edit/:id", adminControllers.editItem)

router.delete("/delete/:id", adminControllers.deleteItem)


module.exports = router;