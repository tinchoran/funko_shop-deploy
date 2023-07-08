const express = require("express");
const app = express();
const PORT = 3007;
const mainRoutes = require("./src/routes/main.routes")
const shopRoutes = require("./src/routes/shop.routes")
const adminRoutes = require("./src/routes/admin.routes")
const authRoutes = require("./src/routes/auth.routes")

app.use(express.static("public"));

app.use("/", mainRoutes)
app.use("/shop", shopRoutes)
app.use("/admin", authRoutes)
app.use("/admin", adminRoutes)

app.listen(PORT, ()=>console.log(`Servidor corriendo en: http://localhost:${PORT}`))



