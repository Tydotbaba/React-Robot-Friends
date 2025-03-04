import React, { StrictMode } from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import 'tachyons';
import App from './App';
import * as serviceWorker from './serviceWorker';

// connect the app to redux
import {Provider } from 'react-redux';
//import functions to creat a store
import {createStore, applyMiddleware, combineReducers } from 'redux';
//import reducers
import {searchRobots } from './reducers';
import {requstRobots } from './reducers';
//import logger from redux
import {createLogger } from 'redux-logger';
//import thunkMiddleware from redux
import {thunk} from 'redux-thunk';
//create root reducer
const rootReducers = combineReducers({searchRobots, requstRobots})
//create a logger
const logger = createLogger();
//creat a store
const store = createStore(rootReducers, applyMiddleware(thunk, logger))



// This is the ID of the div in your index.html file
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
  </StrictMode>
);  
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
