import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'react-bootstrap/dist/react-bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Main from './Components/Main';
import * as serviceWorker from './serviceWorker';

const getCurrentDate = function(){
	const date = new Date();
	return date.toDateString();
}

const greeting = <h1 className="text-center">Hello BJIT! Current Date: { getCurrentDate() }</h1>;

ReactDOM.render(
	<BrowserRouter>
		<Main />
	</BrowserRouter>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
