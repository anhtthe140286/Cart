import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';


import history from '../history';
import Header from './Header';
import ItemCreate from './items/ItemCreate';
import ItemDelete from './items/ItemDelete';
import ItemEdit from './items/ItemEdit';
import ItemList from './items/ItemList';
import ItemShow from './items/ItemShow';
import CartView from './cart/CartView';
// import HotItem from './user/HotItem';
import ItemForm from './items/ItemForm';

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={ItemList} />
                        <Route path="/items/new" component={ItemCreate} />
                        <Route path="/items/edit/:id" component={ItemEdit} />
                        <Route path="/items/delete/:id" component={ItemDelete} />
                        <Route path="/items/:id" component={ItemShow} />
                        <Route path="/cart/:id" component={CartView} />
                        {/* <Route path="/dude/" component={HotItem} /> */}
                        <Route path="/form/" component={ItemForm} />
                        {/* <Route path="/" component={CardEdit} />
                        <Route path="/" component={CardEdit} />
                        <Route path="/" component={CardEdit} />
                        <Route path="/" component={CardEdit} /> */}
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App;