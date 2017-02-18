var axios = require('axios');

module.exports = {
    getData:function(){
        return axios.get('/get').then(function(res){
            console.log(res.data)
        })
    },
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
    }
}
