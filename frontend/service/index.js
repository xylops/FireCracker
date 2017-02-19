var axios = require('axios')
var jwtDecode = require('jwt-decode');


module.exports = {
    setToken: function(token){
        if ( token ) {
            localStorage.token = token
            axios.defaults.headers.common['x-access-token'] = token;
        }
        else {
            delete localStorage.token;
            delete axios.defaults.headers.common['x-access-token'];
        }
    },
    jwtVerify: function(){
        var decoded = jwtDecode(localStorage.token);
        console.log(decoded);
    }
}
