const multer = require("multer");
const path = require("path")

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, path.resolve(__dirname + "../../../public/uploads")),
    filename: (req, file, cb) => cb(null, Date.now() + "_" + file.originalname)
});

const uploadFile = multer({storage});

module.exports = uploadFile;