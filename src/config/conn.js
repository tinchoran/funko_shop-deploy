const mysql = require("mysql2")
require("dotenv").config()

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

pool.getConnection((e, conn) => {
    if(e){
        console.log("ERROR - No se pudo conectar con la base de datos por: " , e);
    } else{
        console.log("Conexión exitosa con la base de datos");
        conn.release()
    }
})

module.exports = {
    conn: pool.promise()
};