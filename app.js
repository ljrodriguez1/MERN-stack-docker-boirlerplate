const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const webSocketsServer = require('./websockets');


const express = require('express');
const app = express();


const router = express.Router();

const path = __dirname + '/views/';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

router.use(function (req,res,next) {
  console.log('/' + req.method);
  next();
});

router.get('/app',function(req,res){
  res.sendFile(path + 'index.html');});

router.get('/sharks',function(req,res){
  res.send('helloworld');
});

router.get('/api1', function(req, res){
  res.send('Hello api ciao')
})

app.use(express.static(path));
app.use('/', router);

app.use('/chat', require('./routes/chat').router);
app.use('/api/users', require('./routes/api/user').router);




mongoose
.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(async ()=>{
  const server = app.listen(process.env.PORT, function () {
    console.log('Rest API listening at port ', process.env.PORT)
  })
  webSocketsServer(server);
})
