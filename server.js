var express = require('express');
var mongoose = require('mongoose')
//create our App
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var routes = require('./backend/route/api');
var auth = require('./backend/route/auth')
var config = require('./backend/config')

//connect to database and set auto reconnect
mongoose.Promise = global.Promise;
mongoose.connection.on("open", function(ref) {
    return console.log("Connected to mongo server!");
});

mongoose.connection.on("error", function(err) {
    console.log("Could not connect to mongo server!");
    return console.log(err.message.red);
});

try {
    mongoose.connect("mongodb://" + config.database);
    db = mongoose.connection;
    console.log("Started connection on " + config.database);
} catch (err) {
    console.log("Setting up failed to connect to " + config.database);
}

//socket.io call
// var authentication = require('./backend/route/file1')(io);
// var file2 = require('./backend/route/file2')(io);
//setting public folder
app.use(express.static('./backend/public'));
app.use('/', routes)
app.use('/auth', auth)

const PORT = process.env.PORT || 3000;

app.use(function(req, res, next){
    if(req.headers['x-forwarded-proto'] === 'https'){
        res.redirect('http://' + req.hostname + req.url);
    }else{
        next();
    }
})

http.listen(PORT, function(){
    console.log('Express server is up on port ' + PORT)
});
