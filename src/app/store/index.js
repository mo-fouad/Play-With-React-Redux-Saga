import { createStore, applyMiddleware} from 'redux';
import { defaultState } from "../../server/defaultState";
import {createLogger} from 'redux-logger';
import  createSagaMiddleware  from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();

import * as sagas from './sagas.mock'

export const store = createStore(
    // our reducer it is a special function that always taks a state and action and return a state
    function reducer ( state = defaultState, action) {
        return state
    },
    applyMiddleware(createLogger(), sagaMiddleware )
);

for (let saga in sagas ) {
    sagaMiddleware.run
}
