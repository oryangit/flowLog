import React from 'react';
import {
  Navigator,
  View,
  StyleSheet,
} from 'react-native';
import EventsList from './EventsList';
import CreateLogForm from './CreateLogForm';
import NavigationBar from 'react-native-navbar';
import store from './EventsStore';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff9900',
    },
});

export default class FlowLogApp extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = store.getState();
        store.subscribe(() => {
            this.setState(store.getState()); // eslint-disable-line react/no-set-state
        });
    }

    onAdd(price) {
        store.dispatch({
            type: 'ADD_EVENT',
            price,
        });
    }

    onGoToListView() {
        this.nav.push({
            name: 'eventListView',
        });
    }

    onLogFormTextChange(text) {
        store.dispatch({
            type: 'LOG_FORM_TEXT_CHANGE',
            text,
        });
    }

    onClose() {
        this.nav.pop(0);
    }

    renderScene(route, nav) {
        switch (route.name) {
        case 'eventListView':
            return (
                <EventsList
                    events={this.state.events}
                    onClose={this.onClose.bind(this)}
                />
            );
        default:
            return (
                <CreateLogForm
                    formLogTextInput={this.state.formLogTextInput}
                    onAdd={this.onAdd.bind(this)}
                    onGoToListView={this.onGoToListView.bind(this)}
                    onTextChange={this.onLogFormTextChange.bind(this)}
                />
            );
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    tintColor={'#05A5D1'}
                    title={{ title: 'FLOW LOG' }}
                />
                <Navigator
                    configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
                    initialRoute={{ name: 'formView', index: 0 }}
                    ref={((nav) => {
                        this.nav = nav;
                    })}
                    renderScene={this.renderScene.bind(this)}
                />
            </View>
        );
    }
}
