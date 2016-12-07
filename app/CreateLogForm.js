import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    TouchableHighlight,
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 150,
        alignItems: 'center',
        backgroundColor: '#F7F7F7',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    input: {
        borderWidth: 1,
        backgroundColor: '#D7D7D7',
        height: 50,
        marginLeft: 10,
        marginRight: 10,
        padding: 15,
        borderRadius: 3,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#FAFAFA',
    },
    button: {
        height: 45,
        alignSelf: 'stretch',
        backgroundColor: '#05A5D1',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

class CreateLogForm extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            price: 0,
        };
    }

    onChange(value) {
        console.log('on change ', value);
        this.state.price = value;
    }

    onAddPressed() {
        this.props.onAdd(this.state);
    }

    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.welcome}>FLOW LOG</Text>

            <TextInput
                keyboardType={'numeric'}
                onChangeText={this.onChange.bind(this)}
                placeholder="Enter the price.."
                style={styles.input}
            />

            <TouchableHighlight
                onPress={this.onAddPressed.bind(this)}
                style={styles.button}
            >
                <Text style={styles.buttonText}>
                    Add
                </Text>
            </TouchableHighlight>
          </View>
        );
    }
}

CreateLogForm.propTypes = {
    onAdd: React.PropTypes.func.isRequired,
};

export default CreateLogForm;
