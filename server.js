const express = require('express')
const app = express()
const ip = require('ip')
const mainroutes = require('./routes/mainrouts.js')

const port = 3000

app.use('/static', express.static(__dirname + '/static'))

app.engine('ejs', require('ejs-locals'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use('/', mainroutes);

app.listen(port, () => {
  console.log(`App listening on ${ip.address()}:${port}`)
})
