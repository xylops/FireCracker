var User   = require('../models/user');
var bcrypt = require('bcryptjs');
var moment = require('moment');
var jwt    = require('jsonwebtoken');

exports = module.exports = function(io){
    io.sockets.on('connection', function (socket) {

        socket.on('login', function (data) {
            console.log(data.id, data.pw);
        });

        socket.on('register', function (data) {
            var {id, pw, pw2} = data

            User.findOne({
                name:id
            }, function(err, user){
                if(err) throw err;

                if(!user){
                    if(pw === pw2){
                        bcrypt.genSalt(10, function(err, salt) {
                            bcrypt.hash(pw, salt, function(err, hash) {
                                // create a sample user
                                var newUser = new User({
                                    name: id,
                                    password: hash,
                                    admin: null
                                });
                                // // save the sample user
                                newUser.save(function(err) {
                                    if (err) throw err;
                                    socket.emit('registerCallback', {successful: true, message: 'User saved successfully'})
                                });
                            });
                        });
                    }else{
                        socket.emit('registerCallback', {success: false, message: 'password are not the same' })
                    }
                }else{
                    socket.emit('registerCallback', {success: false, message: 'user already exist' })
                }
            })
        });

        socket.on('A', function () {
            socket.emit('B', 'Blablabla')
        });
    });
}
