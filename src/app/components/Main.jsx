import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { ConnectedDashbord } from "./Dashboard";


// this it the parent component of our dashboard
// this is the main Higher component to load our store and connect components with store

export const Main = () => (
    <Provider store={store}>
        <div>
            <ConnectedDashbord>

            </ConnectedDashbord>
        </div>
    </Provider>
);

// the Provider is an element that taks a store as a props and make sure
// that every component inside of it has access to this store
