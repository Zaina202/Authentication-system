let express = require('express');
let bodyParser = require('body-parser');
let app = express();

let urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs');
app.use('/assets', express.static('stuff'));

app.get('/server', function (req, res){
    res.render('index');
});

app.get('/server', function(req, res){
    res.render('server', {qs: req.query});
});

app.post('/server', urlencodedParser,function(req,res){
    console.log(req.body);
    res.render('contact-success',{data: req.body});
});

// app.get('/profile/:name',function(req, res){
//     var data = {}
// })