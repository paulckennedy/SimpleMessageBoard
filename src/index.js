import React from 'react';
import ReactDOM from 'react-dom';
import ListPosts from './containers/ListPosts';
import Login from './containers/Login';
import CreateAccount from './containers/CreateAccount';
import registerServiceWorker from './registerServiceWorker';

import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 

import LoadingComponent from './containers/LoadingComponent';
import AuthenticatedComponent from './containers/AuthenticatedComponent';
import PostDetail from './containers/PostDetail';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <LoadingComponent>
                <Switch>
                    <Route path="/CreateAccount" component={CreateAccount} />
                    <Route path="/Login" component={Login} />
                    <AuthenticatedComponent>
                        <Route path="/:id" component={PostDetail} />
                        <Route exact path="/" component={ListPosts} />
                    </AuthenticatedComponent>
                </Switch>
            </LoadingComponent>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
