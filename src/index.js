import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger'


import './index.css';
import reducer from './reducers'
import App from './containers/App';

//Add middlewares
const middlewares = [ReduxThunk];
if (process.env.NODE_ENV !== "production") {
    middlewares.push(createLogger())
}

//CreateStore
const store = createStore(reducer, applyMiddleware(...middlewares))

//Wrap in middlewares
ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

