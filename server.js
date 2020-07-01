require('dotenv').config()
const express = require("express")
const app = express();
const session = require("express-session")
const bodyParser = require("body-parser")
const cors = require("cors")
const PORT = process.env.PORT || 3000;

/////////////// app rendering engine setup ///////////////////
app.set('view engine', 'ejs')
/////////////// app rendering engine setup ///////////////////

////////////////////// app session and cookies setup ////////////////
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({
  secret: process.env.SECRET,
  saveUninitialized: true,
  resave: true,
  cookie: {
    maxAge: 4000000
  },

}))
////////////////////// app session and cookies setup ////////////////


//////////////// application assets and recources //////////////////
app.use('/assets', express.static('views/assets'))
//////////////// application assets and recources //////////////////

app.use(function (req, res, next) {
  //   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');    
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();

});


////////////////// app controllers defines ///////////////////////
const defaultController = require('./Controller/defaultController');
const memberController = require('./Controller/memberController')
defaultController(app);
memberController(app);
////////////////// app controllers defines ///////////////////////




app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
})