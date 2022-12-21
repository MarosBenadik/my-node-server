const express = require('express');
const app = express();
const ip = require('ip');
const mainroutes = require('./routes/mainrouts.js');
const bodyParser = require('body-parser');

require('dotenv').config();
const mongoose = require("mongoose");

const start = new Date().toLocaleTimeString();

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB_LINK, {
   useNewUrlParser: true,
   useUnifiedTopology: true
});
mongoose.Promise = global.Promise;

console.log(`📙 Database connected successfully: at ${start}`)

const port = process.env.PORT | 3000

app.use('/static', express.static(__dirname + '/static'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('ejs', require('ejs-locals'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use('/', mainroutes);

app.listen(port, () => {
  console.log(`🌎 App opened on ${ip.address()}:${port}`)
})
