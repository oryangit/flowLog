import { createStore } from 'redux';

const defaultState = {
    events: [
        { price: 1 },
    ],
};

function eventsStore(state = defaultState, action) {
    switch (action.type) {
    case 'ADD_EVENT':
        return Object.assign({}, state, {
            events: state.events.concat([
                {
                    price: action.price,
                },
            ]),
        });
    default:
        return state;
    }
}

export default createStore(eventsStore);
