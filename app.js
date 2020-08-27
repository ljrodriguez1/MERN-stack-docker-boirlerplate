const express = require('express');
const app = express();
const router = express.Router();

const path = __dirname + '/views/';
const port = 8080;

router.use(function (req,res,next) {
  console.log('/' + req.method);
  next();
});

router.get('/',function(req,res){
  res.sendFile(path + 'index.html');});

router.get('/sharks',function(req,res){
  res.send('helloworld');
});

router.get('/api1', function(req, res){
  res.send('Hello api ciao')
})

app.use(express.static(path));
app.use('/', router);

app.use('/api', require('./routes/chat').router);


app.listen(port, function () {
  console.log('Example app listening on port ciao 8080!')
})
