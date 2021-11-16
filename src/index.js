import React from 'react';
import ReactDOM from 'react-dom';
import AddUserName from './context';
import Deyta from './dataContext';
import Productscontext from './ProductContext';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
ReactDOM.render(
<Router>
    <Productscontext>
   <Deyta>
<AddUserName>
   
<App />
</AddUserName>
</Deyta>
</Productscontext>
</Router>
, document.getElementById('root'));
