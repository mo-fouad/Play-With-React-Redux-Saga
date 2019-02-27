import { createStore } from 'redux';
import { defaultState } from "../../server/defaultState";

export const store = createStore(
    // our reducer it is a special function that always taks a state and action and return a state
    function reducer ( state = defaultState, action) {
        return state
    }
)
