const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index', {name: 'Hampster', food: 'nuts'});
});

app.post('/', function(req, res){
    const data = req.body;
    console.log(req.body)
    res.json({
        message: data
    });
})

app.get('/teams', function(req, res){
    res.json({
        name: 'NY Knicks'
    })
});

app.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log(`Server is now running on PORT ${port}`);
});