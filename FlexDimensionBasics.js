import React, { Component } from 'react';
import { Text, View, TextInput, Alert, Button } from 'react-native';

export default class FlexDimensionBasics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
  }

  _setText(text) {
    this.setState({text});
  }

  _countNumberOfWords() {
    if(this.state.text == "") {
      return 0;
    } else {
      return this.state.text.split(' ').length;
    }
  }

  _onPressButton() {
    Alert.alert("You tapped the button");
  }

  render() {
    return(
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this._setText(text)}
        />
        
        <Text style={{padding: 10, fontSize: 42}}>
          The no of words are: {this._countNumberOfWords()}
        </Text>
        <Button
          onPress={this._onPressButton}
          title="Press Me"
        />

      </View>
    )
  }
}
