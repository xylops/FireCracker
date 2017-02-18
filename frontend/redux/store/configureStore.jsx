 var redux = require('redux');
 var {authentication} = require('../reducers/authReducers');

 export var configure = (initialState = {})=>{
    var reducers = redux.combineReducers({
        authentication
    })

    var store = redux.createStore(reducers, initialState,redux.compose(
        window.devToolsExtension ? window.devToolsExtension(): f => f
    ));

    return store;
 };
