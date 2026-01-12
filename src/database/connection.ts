const mysql = require('mysql')

const dbConnection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'password',
  database: 'suppliers_payments',
})


export default dbConnection
