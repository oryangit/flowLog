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
    case 'LOG_FORM_TEXT_CHANGE':
        const text = action.text;
        console.log('on change ', text);
        let newText = '';
        const numbers = '0123456789';

        for (let i = 0; i < text.length; i++) {
            if (numbers.indexOf(text[i]) > -1) {
                newText = newText + text[i];
            }
        }

        return Object.assign({}, state, {
            formLogTextInput: newText,
        });
    default:
        return state;
    }
}

export default createStore(eventsStore);
