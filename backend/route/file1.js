exports = module.exports = function(io){
  io.sockets.on('connection', function (socket) {
    socket.on('file1Event', function () {
      console.log('file1Event triggered');
    });
  });
}
