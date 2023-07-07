const express = require("express");
const app = express();
const PORT = 3007;


app.use(express.static("public"));

app.get("/ping", (req, res)=>res.send("pong"));

app.listen(PORT, ()=>console.log(`Servidor corriendo en: http://localhost:${PORT}`))



