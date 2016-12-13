import React from 'react';
import {
  Navigator,
} from 'react-native';
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
        this.setState({ events: this.state.events });
    }

    onGoToListView() {
        this.nav.push({
            name: 'eventListView',
        });
    }

    renderScene(route, nav) {
        switch (route.name) {
        case 'eventListView':
            return (
                <EventsList
                    events={this.state.events}
                />
            );
        default:
            return (
                <CreateLogForm
                    onAdd={this.onAdd.bind(this)}
                    onGoToListView={this.onGoToListView.bind(this)}
                />
            );
        }
    }

    render() {
        return (
            <Navigator
                initialRoute={{ name: 'logView', index: 0 }}
                ref={((nav) => {
                    this.nav = nav;
                })}
                renderScene={this.renderScene.bind(this)}
            />
        );
    }
}
