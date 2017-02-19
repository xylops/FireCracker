var axios = require('axios');

module.exports = {
    register:function(id, pw, pw2){
        return axios({
            method:'post',
            url:'/auth/register',
            params:{
                id,
                pw,
                pw2
            }
        })
    },
    authenticate:function(id, pw){
        return axios({
            method:'post',
            url:'/auth/authenticate',
            params:{
                id,
                pw,
            }
        })
    },
    refreshToken:function(token){
        return axios({
            method:'post',
            url:'/auth/refreshToken',
            params:{
                token
            }
        })
    }

}
