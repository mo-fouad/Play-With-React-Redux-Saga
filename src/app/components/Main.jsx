import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../store';
import {ConnectedDashbord} from "./Dashboard";
import {Router, Route} from 'react-router-dom'
import {history} from "../store/history";
import { ConnectedNav} from './Nav'

// this it the parent component of our dashboard
// this is the main Higher component to load our store and connect components with store

export const Main = () => (
    <Router history={history}>
        <Provider store={store}>
            <div>
                <ConnectedNav />
                {/*setting up our Dashbord rout*/}
                <Route exact path="/dashboard" render={() => ( <ConnectedDashbord />)} />

                {/*<ConnectedDashbord />*/}
            </div>
        </Provider>
    </Router>
);

// the Provider is an element that taks a store as a props and make sure
// that every component inside of it has access to this store
