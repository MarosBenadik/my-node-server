const express = require('express')
const app = express()
const ip = require('ip')

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Maros! Your CD works great')
})

app.listen(port, () => {
  console.log(`App listening on ${ip.address()} ${port}`)
})
