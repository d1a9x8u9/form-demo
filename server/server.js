const { Pool, Client } = require('pg')
const connectionString = 'postgres://postgres:password@localhost:5432/postgres'

// const pool = new Pool({
//   connectionString: connectionString,
// })

// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })

const client = new Client({
  connectionString: connectionString,
})
client.connect()

const query = {
    // give the query a unique name
    name: 'fetch-user',
    text: 'SELECT * FROM test',
    values: [1]
  }
  
  // callback
  client.query(query, (err, res) => {
    if (err) {
      console.log(err.stack)
    } else {
      console.log(res.rows[0])
    }
  })

  client.query(query)
  .then(res => console.log(res.rows[0]))
  .catch(e => console.error(e.stack))

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})

