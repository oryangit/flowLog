import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
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
                <Image source={{ uri: this.props.event.place.icon }}
                    style={{ width: 24, height: 24 }}
                />
                <Text
                    style={styles.label}
                >{this.props.event.price}₪, from {this.props.event.place.name}</Text>
            </View>
        );
    }
}

EventRow.propTypes = {
    event: React.PropTypes.shape({
        price: React.PropTypes.number.isRequired,
        place: React.PropTypes.shape({
            name: React.PropTypes.string,
            icon: React.PropTypes.string,
        }),
        initialPosition: React.PropTypes.shape({
            coords: React.PropTypes.shape({
                latitude: React.PropTypes.number,
                longitude: React.PropTypes.number,
            }),
        }),
    }).isRequired,
};

export default EventRow;
