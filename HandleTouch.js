import React, { Component } from 'react';
import { Alert, View, Button } from 'react-native';

export default class HandleTouch extends Component {
  context(props) {
    super(props);
  }

  _onPressButton() {
    Alert.alert("You tapped the button");
  }

  render() {
    return(
        <View style={{ padding: 10 }}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
          />
      </View>
    )
  }
}