import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { AppRegistry, Alert } from "react-native";
import { Container, Header, Input, Left, Body, Title, Card, CardItem, 
    Content, Right, Icon, Button, Text } from "native-base";
import { StackNavigator } from "react-navigation";
//import { View, Text } from "react-native";
import { loadBJs } from '../actions/break_journeys';
import BreakJourney from './BreakJourney.js';
import ShowDistance from'./ShowDistance';

class Trip extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        latitude: 22.6089739,
        longitude: 88.4419673,
        error: null,
      timer: null
    };
  }

  componentWillMount() {

  }

  componentDidMount() {
    //Alert.alert("This is the page where location list will be shown");
    let timer = setInterval(
    navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,
          });
        },
      (error) => this.setState({ error: error.message, latitude: 22.6975387, longitude: 88.3838953 }),
        { enableHighAccuracy: false, timeout: 20000, maximumAge: 3000 },
    ), 5000);

    this.setState({timer});
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
          <ShowDistance lat={this.state.latitude} long={this.state.longitude} />
          
          { this.props.breakJourneyData.map((bj, index) => 
            <BreakJourney breakJourney={bj.attributes} key={index} />
          )}
      
          
        </Content>
      </Container>
    );
  }
}

const mapStatetoProps = state => {
  return {
    breakJourneyData: state.breakJourney
  }
}

export default connect(mapStatetoProps)(Trip);
