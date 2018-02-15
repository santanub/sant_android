import React from "react";
import { Container, Header, Input, Left, Body, Title, Card, CardItem, 
    Content, Right, Icon, Button, Text } from "native-base";

class BreakJourney extends React.Component {
  render() {
    return(
      <Text>{this.props.breakJourney.stopName}</Text>
    )
  }
}

export default BreakJourney;
