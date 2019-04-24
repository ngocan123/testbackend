import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

import axioApi from './axioConfig';

let token = localStorage.getItem('token');            
if(token){
	axioApi.defaults.headers.common['x-access-token'] = localStorage.getItem('token');           
	axioApi.get('auth/checkToken').then((res) => { 
        localStorage.setItem('user_id', res.data.id);
	}).catch((err) => {
        localStorage.removeItem('token');   
    });
}

ReactDOM.render(<BrowserRouter>
    <App />
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();
