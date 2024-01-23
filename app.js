const express = require("express");
const app = express();
const mainRoutes = require("./src/routes/main.routes")
const shopRoutes = require("./src/routes/shop.routes")
const adminRoutes = require("./src/routes/admin.routes")
const authRoutes = require("./src/routes/auth.routes")
const method_override = require("method-override")

app.get("/", (req, res) => {
    res.redirect("/home")
})

require("dotenv").config()
const PORT = process.env.PORT;

app.use(express.urlencoded())
app.use(express.json())

app.use(method_override("_method"))

app.use(express.static("public"));

app.set("view engine", "ejs")
app.set("views", "./src/views")



app.use("/", mainRoutes)
app.use("/shop", shopRoutes)
app.use("/admin", authRoutes)
app.use("/admin", adminRoutes)

app.listen(PORT, ()=>console.log(`Servidor corriendo en: http://localhost:${PORT}`))



