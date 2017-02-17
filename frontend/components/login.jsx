import React from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
let socket = io();
//material-ui
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

var Login = React.createClass({
    componentWillMount:function(){
        socket.on('B', function(data){
            alert(data)
        })
    },
    handleLogin:function(){
        var id = this.refs.id.getValue();
        var pw = this.refs.pw. getValue();

        socket.emit('login', {id, pw})
    },
    render:function(){
        return (
            <div className="row">
                <div className="column small-12 medium-6 medium-centered " style={style.container}>
                    <b ><h3 style={style.title}>Fire Cracker Admin Panel</h3></b>
                    <TextField
                        floatingLabelText="User Name"
                        fullWidth={true}
                        ref="id"
                    /><br/>
                    <TextField
                        floatingLabelText="Password"
                        fullWidth={true}
                        type="password"
                        ref="pw"
                    /><br/>
                    <br/>
                    <RaisedButton label="Login" fullWidth={true} primary={true} onClick={this.handleLogin}/>
                </div>
            </div>
        )
    }
})

const style = {
    container:{
        textAlign:'center',
        paddingTop:'20%'
    },
    title:{
        fontWeight: 900,
        color: '#00bcd4'
    }
}

export default connect()(Login);
