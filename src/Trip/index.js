import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { AppRegistry, Alert, StyleSheet, View, ScrollView } from "react-native";
import { Container, Header, Input, Left, Body, Title, Card, CardItem, 
         Content, Right, Icon, Button, Text, Footer, FooterTab } from "native-base";
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
      (error) => this.setState({ error: error.message, latitude: 22.6975387, longitude: 88.3838953 }),
        { enableHighAccuracy: false, timeout: 20000, maximumAge: 3000 },
    );

    //this.setState({timer});
    this.props.dispatch(loadBJs());
  }

  
  render() {
    return (
      <Container>
        <Header>
          <Title style={styles.header}>Show Trip Details</Title>
        </Header>
        <Content padder>
          <View style={{ flex: 1}}>
          <View style={styles.currentLocation}>
              <Text style={styles.locText}>Latitude: {this.state.latitude}</Text>
              <Text style={styles.locText}>Longitude: {this.state.longitude}</Text>
              <Text style={styles.locText}>error: {this.state.error}</Text>
          </View>
          <View style={styles.distance}>
            <ShowDistance lat={this.state.latitude} long={this.state.longitude} />
          </View>
          <View style={styles.stoppages}>
            <ScrollView>
            { this.props.breakJourneyData.map((bj, index) => 
              <BreakJourney breakJourney={bj.attributes} key={index} />
            )}
            </ScrollView>
          </View>
          
        </View>
        </Content>
        <Footer>
          <FooterTab style={styles.footer}>
            <Button badge vertical>
              <Text style={styles.footerText}>S@ntanu</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  footer: {
    backgroundColor: 'steelblue',
  },
  footerText: {
    color: 'white',
  },
  distance: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: '#87CEEB', 
    borderColor: '#232337',

  },
  currentLocation: {
    flex: 2,
    borderRadius: 5,
    backgroundColor: '#87CEEB', 
    borderColor: '#232337',
    
  },
  stoppages: {
    flex: 3,
    borderRadius: 5,
    backgroundColor: '#87CEEB', 
    borderColor: '#232337',

  },
  locText: {
    fontSize: 20,
    lineHeight: 20,
    color: 'blue',
    textAlign: 'left',
    letterSpacing: 5,
    
  }
});
const mapStatetoProps = state => {
  return {
    breakJourneyData: state.breakJourney
  }
}

export default connect(mapStatetoProps)(Trip);
