import React from 'react';
import {
  StyleSheet,
  View,
  ListView,
} from 'react-native';
import EventRow from './EventRow';

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        backgroundColor: '#F7F7F7',
        flex: 1,
        justifyContent: 'flex-start',
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

    renderRow(event) {
        return (
            <EventRow event={event} />
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    key={this.props.events}
                    renderRow={this.renderRow.bind(this)}
                />
            </View>
        );
    }
}

EventsList.propTypes = {
    events: React.PropTypes
            .arrayOf(React.PropTypes.object).isRequired,
};

export default EventsList;
