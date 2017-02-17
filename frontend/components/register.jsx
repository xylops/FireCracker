import React from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
let socket = io();
//material-ui
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

var Register = React.createClass({
    componentWillMount:function(){
        socket.on('registerCallback', function(data){
            console.log(data)
        })
    },
    handleRegister:function(){
        var id = this.refs.id.getValue();
        var pw = this.refs.pw. getValue();
        var pw2 = this.refs.pw2.getValue();

        socket.emit('register', {id, pw, pw2})
    },
    render:function(){
        return (
            <div className="row">
                <div className="column small-12 medium-6 medium-centered " style={style.container}>
                    <b ><h3 style={style.title}>Register</h3></b>
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
                    <TextField
                        floatingLabelText="Confirm Password"
                        fullWidth={true}
                        type="password"
                        ref="pw2"
                    /><br/>
                    <br/>
                    <RaisedButton label="Register" fullWidth={true} primary={true} onClick={this.handleRegister}/>
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


export default connect()(Register);
