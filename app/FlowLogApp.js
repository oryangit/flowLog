import React from 'react';
import EventsList from './EventsList';
import CreateLogForm from './CreateLogForm';

export default class FlowLogApp extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            events: [
                {
                    price: 41,
                },
                {
                    price: 19,
                },
            ],
        };
    }

    onAdd(event) {
        this.state.events.push(event);
    }

    render() {
        return (
            // <EventsList
            //     events={this.state.events}
            // />
            <CreateLogForm
                onAdd={this.onAdd.bind(this)}
            />
        );
    }
}
