// let express = require('express');
// let bodyParser = require('body-parser');
// let app = express();

// let urlencodedParser = bodyParser.urlencoded({ extended: false })

// app.set('view engine', 'ejs');
// app.use('/assets', express.static('stuff'));

// app.get('/server', function (req, res){
//     res.render('index');
// });

// app.get('/server', function(req, res){
//     res.render('server', {qs: req.query});
// });

// app.post('/server', urlencodedParser,function(req,res){
//     console.log(req.body);
//     res.render('contact-success',{data: req.body});
// });

//---------------------------------------------

// app.get('/profile/:name',function(req, res){
//     var data = {}
// })

//----------------------------


var http = require('http');
var fs = require('fs');
const { append } = require('express/lib/response');
var server = http.createServer(function(req, res){
  console.log('request was made:' + req.url);
  if(req.url=== '/home'|| req.url === '/')
  {
    res.writeHead (200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/signup.html').pipe(res);
  }
});
server.listen(4000, '127.0.0.1');
console.log('yo dawgs, now listening to port 4000');

// var express = require('express');
// var app = express();

// app.set('view engine', 'ejs');
// app.use('/assets', express.static('assets'));

// app.get('/', function(req, res){
//   res.render('signup');
// });
