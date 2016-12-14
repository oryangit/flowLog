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
    input: {
        borderWidth: 1,
        backgroundColor: '#F7F7F7',
        height: 50,
        marginLeft: 10,
        marginRight: 10,
        padding: 15,
        borderRadius: 3,
    },
    buttonsContainer: {
        alignSelf: 'stretch',
        marginTop: 70,
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
    showLogsButton: {
        backgroundColor: '#d0d0d0',
    },
    showLogsButtonText: {
        color: '#000',
    },
});

class CreateLogForm extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            price: '',
        };
    }

    onChange(text) {
        console.log('on change ', text);
        let newText = '';
        const numbers = '0123456789';

        for (let i = 0; i < text.length; i++) {
            if (numbers.indexOf(text[i]) > -1) {
                newText = newText + text[i];
            }
        }

        this.setState({ price: newText });
    }

    onAddPressed() {
        // validation
        if (!this.state.price || this.state.price === '') {
            return;
        }

        this.props.onAdd(parseInt(this.state.price, 10));
        this.setState({ price: '' });
    }

    onGoToListViewPressed() {
        this.props.onGoToListView(this.state);
    }

    render() {
        return (
          <View style={styles.container}>
            <TextInput
                keyboardType={'numeric'}
                onChangeText={this.onChange.bind(this)}
                onSubmitEditing={() => this.onAddPressed()}
                placeholder="The price goes here.."
                style={styles.input}
                value={this.state.price}
            />

            <View style={styles.buttonsContainer}>
                <TouchableHighlight
                    onPress={this.onAddPressed.bind(this)}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>
                        Add
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={this.onGoToListViewPressed.bind(this)}
                    style={[styles.button, styles.showLogsButton]}
                >
                    <Text style={[styles.buttonText, styles.showLogsButtonText]}>
                        Show logs
                    </Text>
                </TouchableHighlight>
            </View>
          </View>
        );
    }
}

CreateLogForm.propTypes = {
    onAdd: React.PropTypes.func.isRequired,
    onGoToListView: React.PropTypes.func.isRequired,
};

export default CreateLogForm;
