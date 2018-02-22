import React from "react";
import { Container, Header, Input, Left, Body, Title, Card, CardItem, 
         Content, Right, Icon, Button, Text, View } from "native-base";
import { TouchableHighlight, StyleSheet } from 'react-native';
//import { loadBJs } from '../actions/break_journeys';

class BreakJourney extends React.Component {
  constructor(props) {
    super(props);
  }

  showTime(breakJourney) {
    if(breakJourney.arrivalHours && breakJourney.arrivalMins) {
      return (breakJourney.arrivalHours + " : " + breakJourney.arrivalMins);
    } else {
      return "";
    }
  }

  checkInPlace(id) {
    alert(1);
    //this.props.dispatch(loadBJs());
  }

  render() {
    return(
        <View style={{ flex: 2}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1, backgroundColor: 'powderblue'}}>
              <Text>{this.props.breakJourney.stopName}</Text>
            </View>
            <View style={{flex: 1, backgroundColor: 'skyblue'}}>
              <Text>{this.props.breakJourney.distance} km</Text>
            </View>
            <View style={{flex: 1, backgroundColor: 'skyblue'}}>
              <Text>{this.showTime(this.props.breakJourney)}</Text>
            </View>
            <View style={{flex: 1, backgroundColor: 'skyblue'}}>
              <TouchableHighlight onPress={this.checkInPlace(this.props.id)} underlayColor="white">
                <View style={styles.button}>
                  <Text style={styles.buttonText}>CheckIn {this.props.id}</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </View>
       )
  }
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 30,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    paddingTop: 10,
    paddingBottom: 10,
    color: 'white'
  }
})

export default BreakJourney;
