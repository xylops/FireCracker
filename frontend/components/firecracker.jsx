var React = require('react');
var {connect} = require('react-redux')
import io from 'socket.io-client';
var socket = io();
// var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var firecracker = React.createClass({
    render:function(){
        var path = this.props.location.pathname;
        var segment = path.split('/')[1] || 'root';
        return (
            <div className='Column small-12 small-centered medium-12'>
                {this.props.children}
            </div>
        )
    }
})

export default connect()(firecracker);
