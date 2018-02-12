import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { AppRegistry, Alert } from "react-native";
import { Container, Header, Input, Left, Body, Title, Card, CardItem, 
    Content, Right, Icon, Button, Text } from "native-base";
import { StackNavigator } from "react-navigation";
//import { View, Text } from "react-native";
import { loadBJs } from '../actions/break_journeys';

class Trip extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        latitude: null,
        longitude: null,
        error: null,
    };
  }

  componentDidMount() {
    Alert.alert("This is the page where location list will be shown");
    navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,
          });
        },
        (error) => this.setState({ error: error.message }),
        { enableHighAccuracy: false, timeout: 20000, maximumAge: 3000 },
    );

    this.props.dispatch(loadBJs());
  }

  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <Icon active name="train" />
              <Input placeholder='Show trip details here' />
              <Right>
                <Icon name="close" />
              </Right>
            </CardItem>
          </Card>
          <Text>
              latitude: {this.state.latitude}
              </Text>
          <Text>longitude: {this.state.longitude}</Text>
          <Text>error: {this.state.error}</Text>
        </Content>
      </Container>
    );
  }
}

const mapStatetoProps = state => {
  return {
    breakJourneyData: state.breakJourney.breakJourneyData
  }
}

export default connect()(Trip);
