import React from 'react';
import {
  StyleSheet,
  View,
  ListView,
  TouchableHighlight,
  Text,
  ScrollView,
} from 'react-native';
import EventRow from './EventRow';

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        backgroundColor: '#F7F7F7',
        flex: 1,
        justifyContent: 'flex-start',
    },
    button: {
        height: 45,
        alignSelf: 'stretch',
        backgroundColor: '#d0d0d0',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

class EventsList extends React.Component {
    constructor(props, context) {
        super(props, context);

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        });

        this.state = {
            dataSource: ds.cloneWithRows(props.events),
        };
    }

    onClose() {
        this.props.onClose();
    }

    renderRow(event) {
        return (
            <EventRow event={event} />
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <ListView
                        dataSource={this.state.dataSource}
                        key={this.props.events}
                        renderRow={this.renderRow.bind(this)}
                    />
                 </ScrollView>
                <TouchableHighlight
                    onPress={this.onClose.bind(this)}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>
                        Close
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

EventsList.propTypes = {
    events: React.PropTypes
            .arrayOf(React.PropTypes.object).isRequired,
    onClose: React.PropTypes.func.isRequired,
};

export default EventsList;
