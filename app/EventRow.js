import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#E7E7E7',
        padding: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
    },
    label: {
        fontSize: 20,
        fontWeight: '300',
    },
});

class EventRow extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text
                    style={styles.label}
                >{this.props.event.description}</Text>
            </View>
        );
    }
}

EventRow.propTypes = {
    event: React.PropTypes.shape({
        description: React.PropTypes.string.isRequired,
    }).isRequired,
};

export default EventRow;
