import React from 'react';
import { connect } from 'react-redux';
//api
var authAPI = require('../api/authAPI')
var service = require('../service')
//material-ui
import RaisedButton from 'material-ui/RaisedButton';

var DashBoard = React.createClass({
    componentWillMount:function(){

    },
    handleLogout:function(){
        console.log('LOGOUT')
    },
    handleRefreshToken:function(){
        console.log('refreshing Token')
        var that = this
        authAPI.refreshToken(localStorage.token).then((res)=>{
            service.setToken(res.data.token)
            if(!res.data.success){
                alert('your token has expired')
                that.props.router.push('/')
            }else{
                alert('New token has been issue ')
                console.log('Res Token = ' + res.data.token)
                console.log('Storage Token = ' + localStorage.token)
            }
        })
    },
    render:function(){
        return (
            <div>
                this is dashboard<br/>

                <RaisedButton label="Refresh Token " secondary={true} onClick={this.handleRefreshToken}/><br/>
                <RaisedButton label="logout" primary={true} onClick={this.handleLogout}/>
            </div>
        )
    }
})

export default connect((state)=>{
    return {
        token:state.authentication.token,
    }
})(DashBoard);
