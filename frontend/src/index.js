import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter} from 'react-router-dom'

// Separate pages (routes).
import App from '../src/components/App/App'
import ItemAdd from '../src/components/CreateItem/ItemAdd'
import ItemsPreview from './components/ItemList/ItemList'

ReactDOM.render(
  <BrowserRouter>
    <Route exact path='/' component={App} />
    <Route exact path='/admin/proizvodi' component={ItemsPreview} />
    <Route exact path='/admin/unos-novog-proizvoda' component={ItemAdd} />
  </BrowserRouter>,
  document.getElementById('root')
)