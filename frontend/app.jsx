var React = require('react');
var ReactDOM = require('react-dom');
var { Provider } = require('react-redux');
var {Route, Router, IndexRoute, hashHistory, browserHistory} = require('react-router');

//Material UI
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();

var store = require('configureStore').configure();

import Firecracker from 'firecracker';
import Login from 'login';
import Register from 'register';
import DashBoard from 'dashboard';

store.subscribe(() => {
    var state = store.getState();
    console.log('New state', state);
});
console.log(store.getState())

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

const App = () => (
    <MuiThemeProvider>
        <Provider store = {store}>
            <Router history={hashHistory}>
                <Route path="/" component={Firecracker}>
                    <Route path="dashboard" component={DashBoard}/>
                    <Route path="register" component={Register}/>
                    <IndexRoute component={Login}/>
                </Route>
            </Router>
        </Provider>
    </MuiThemeProvider>
);

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
