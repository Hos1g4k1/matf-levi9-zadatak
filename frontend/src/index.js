import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter} from 'react-router-dom'

import App from '../src/components/App/App'
import ItemAdd from '../src/components/CreateItem/ItemAdd'
import ItemList from './components/ItemList/ItemList';

ReactDOM.render(
  <BrowserRouter>
    <Route exact path='/' component={App} />
    <Route exact path='/admin/proizvodi' component={ItemList} />
    <Route exact path='/admin/unos-novog-proizvoda' component={ItemAdd} />
  </BrowserRouter>,
  document.getElementById('root')
)