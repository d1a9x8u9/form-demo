var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'demo_form'
});

connection.connect()

export const getDataFromDb = () => {
  connection.query('SELECT * from data', function (err, rows, fields) {
    if (err) throw err
    console.log(rows);
  })
}

connection.end()