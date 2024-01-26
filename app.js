const express = require("express");
const app = express();
const method_override = require("method-override")
const { initSession } = require("./src/utils/sessions");
require("dotenv").config()


/* IMPORT DE LAS RUTAS */

const mainRoutes = require("./src/routes/main.routes")
const shopRoutes = require("./src/routes/shop.routes")
const adminRoutes = require("./src/routes/admin.routes")
const authRoutes = require("./src/routes/auth.routes") 
const { notFoundPage } = require("./src/middlewares/errorsHandler");

app.get("/", (req, res) => {
    res.redirect("/home")
})

const PORT = process.env.PORT;

/* Define carpeta de archivos estáticos */
app.use(express.static("public"));


/*  User Session  */
app.use(initSession());
app.use((req, res, next) => {
    res.locals.isLogged = req.session.isLogged;
    next();
})


/*  Configuración del Template Engine  */
app.set("view engine", "ejs")
app.set("views", "./src/views")

/*  Parsea los datos recibidos por POST  */
app.use(express.urlencoded())
app.use(express.json())

/*  Override para habilitar metodos PUT y DELETE */
app.use(method_override("_method"))


/*  Habilitar Rutas  */
app.use("/", mainRoutes)
app.use("/shop", shopRoutes)
app.use("/auth", authRoutes)
app.use("/admin", adminRoutes)

app.use(notFoundPage)

app.listen(PORT, ()=>console.log(`Servidor corriendo en: http://localhost:${PORT}`))



