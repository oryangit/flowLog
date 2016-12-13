import React from 'react';
import {
  Navigator,
  View,
  StyleSheet,
} from 'react-native';
import EventsList from './EventsList';
import CreateLogForm from './CreateLogForm';
import NavigationBar from 'react-native-navbar';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff9900',
    },
});

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
            <View style={styles.container}>
                <NavigationBar
                    tintColor={'#05A5D1'}
                    leftButton={{ title: 'Back', tintColor: '#f0f0f0' }}
                    title={{ title: 'FLOW LOG' }}
                />
                <Navigator
                    initialRoute={{ name: 'logView', index: 0 }}
                    ref={((nav) => {
                        this.nav = nav;
                    })}
                    renderScene={this.renderScene.bind(this)}
                />
            </View>
        );
    }
}
