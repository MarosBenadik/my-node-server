const express = require('express')
const app = express()
const ip = require('ip')

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Maros!')
})

app.listen(port, () => {
  console.log(`App listening on ${ip.address()} ${port}`)
})
