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
    //Alert.alert("This is the page where location list will be shown");
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

  distance(lat1, lon1, lat2, lon2, unit) {
    var radlat1 = Math.PI * lat1/180
    var radlat2 = Math.PI * lat2/180
    var theta = lon1-lon2
    var radtheta = Math.PI * theta/180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist)
    dist = dist * 180/Math.PI
    dist = dist * 60 * 1.1515
    if (unit=="K") { dist = dist * 1.609344 }
    if (unit=="N") { dist = dist * 0.8684 }
    return dist
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
          <Text> Coming from stores lat{ this.props.breakJourneyData[0].lat}</Text>
          <Text>Coming from stores long { this.props.breakJourneyData[0].long}</Text>
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

export default connect(mapStatetoProps)(Trip);
