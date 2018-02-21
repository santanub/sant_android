import React from "react";
import { Container, Header, Input, Left, Body, Title, Card, CardItem, 
         Content, Right, Icon, Button, Text, View } from "native-base";

class BreakJourney extends React.Component {
  render() {
    return(
      <View>
        <Text>{this.props.breakJourney.stopName}</Text>
        <Text>{this.props.breakJourney.distance}</Text>
      </View>
    )
  }
}

export default BreakJourney;
