const PUERTO = process.env.PUERTO || 3000

const DB_HOST =process.env.DB_HOST || "localhost"

const DB_USER =process.env.DB_USER || "root"

const DB_PASSWORD =process.env.DB_PASSWORD || "1234"

const DB_NAME =process.env.DB_NAME || "prueba2"

 const DB_PORT =process.env.DB_PORT || "3306" 

module.exports = {
    PUERTO, DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT
}