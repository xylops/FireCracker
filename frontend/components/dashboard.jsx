import React from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
var socket = io();
var service = require('../service')

var DashBoard = React.createClass({
    componentWillMount:function(){
        
    },
    render:function(){
        return (
            <div>
                this is dashboard
            </div>
        )
    }
})

export default connect((state)=>{
    return {
        token:state.authentication.token,
    }
})(DashBoard);
