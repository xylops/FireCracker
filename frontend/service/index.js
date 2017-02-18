var jwtDecode = require('jwt-decode');


module.exports = {
    refreshToken: function(token){

    },
    jwtVerify: function(){
        var decoded = jwtDecode(localStorage.token);
        console.log(decoded);
    }
}
