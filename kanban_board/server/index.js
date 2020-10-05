const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
var cors = require('cors');
const { getMaxListeners } = require('process');
const pino = require('express-pino-logger')();


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(pino);

app.use(cors({ origin: "*" }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});

app.use('/static', express.static(path.join(__dirname, '../DB/data.json')));

app.get('/api', (req, res) => {
  console.log("it is " + __dirname + "../DB");
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.post('/signup', (req, res) => {
  try {
    var data = {
      "email": req.body.email,
      "password": req.body.password
    };
    let existingData = fs.readFileSync(path.join(__dirname, '../DB/data.json'));
    let existParseData;
   
    existParseData = JSON.parse(existingData);  
    existParseData.push(data);
    // write to a new file named 2pac.txt
    fs.writeFile(path.join(__dirname, '../DB/data.json'), JSON.stringify(existParseData), (err) => {
      // throws an error, you could also catch it here
      if (err) throw err;

      // success case, the file was saved
      res.send(true);
      console.log('Saved!');
    });
  } catch (e) {
    res.send(e);
    console.log(e);
  }
})

app.post('/signin', (req, res) => {
  try {
    let signinData = fs.readFileSync(path.join(__dirname, '../DB/data.json'));
    let signinParseData = JSON.parse(signinData);
    // console.log(req.body);
    let entry = signinParseData.filter(function (e) {
      return e.email == req.body.email;
    });
    // console.log(entry);
    if (entry.length && entry[0].password == req.body.password) {
      res.send(true);
    } else {
      res.send(false);
    }
  }
  catch (e) {
    console.log(e);
  }
})

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);