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
    }

    onChange(text) {
        this.props.onTextChange(text);
    }

    onAddPressed() {
        // validation
        if (!this.props.formLogTextInput || this.props.formLogTextInput === '' || this.props.formLogTextInput === '0') {
            return;
        }

        this.props.onAdd(parseInt(this.props.formLogTextInput, 10));
        this.onChange('');
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
                value={this.props.formLogTextInput}
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
    formLogTextInput: React.PropTypes.string,
    onAdd: React.PropTypes.func.isRequired,
    onGoToListView: React.PropTypes.func.isRequired,
    onTextChange: React.PropTypes.func.isRequired,
};

export default CreateLogForm;
