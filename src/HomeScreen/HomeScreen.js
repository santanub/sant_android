import React from "react";
import { StatusBar } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="menu" />
            </Button>
          </Left>
          
          <Body>
            <Title>HomeScreen</Title>
          </Body>
          
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text style={{ fontSize: 30}}>Trip to sadsad!</Text>
              </Body>
            </CardItem>
          </Card>
          
          <Button full rounded primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Profile")}>
            <Text>Goto Profiles</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
