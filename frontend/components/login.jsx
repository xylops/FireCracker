import React from 'react';
//redux
import { connect } from 'react-redux';
var actions = require( '../redux/actions/authActions');
var jwtDecode = require('jwt-decode');
//api
var authAPI = require('../api/authAPI')

//material-ui
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

var service = require('../service')

var Login = React.createClass({
    getInitialState:function(){
        return ({
            error:'',
            loading: false
        })
    },
    handleLogin:function(){
        var id = this.refs.id.getValue();
        var pw = this.refs.pw. getValue();
        var that = this;
        this.setState({
            loading:true,
            error: ''
        })
        authAPI.authenticate(id, pw).then(function(res){
            that.setState({loading: false})
            if(res.data.success){
                that.props.router.push('/dashboard')
            }else{
                that.setState({
                    error: res.data.message
                })
            }
        })
    },
    render:function(){
        var renderError = () => {
            if(this.state.error !== ''){
                return (
                    <div style={style.errorText}>
                        {this.state.error}
                    </div>
                )
            }
        }
        return (
            <div className="row">
                <div className="column small-12 medium-6 medium-centered " style={style.container}>
                    <b ><h3 style={style.title}>Fire Cracker Admin Panel</h3></b>
                    {renderError()}
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
    },
    errorText:{
        fontSize:'20px',
        color: 'red'
    }
}

export default connect()(Login);
