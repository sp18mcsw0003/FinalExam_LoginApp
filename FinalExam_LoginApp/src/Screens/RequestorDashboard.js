import { Body, Button, Container, Content, Header, Icon, Left, List, ListItem, Right, Text, Title } from 'native-base';
import React, { Component } from "react";
import Communications from 'react-native-communications';
import styles from './stylizing';

class RequestorDashboard extends Component {
  static navigationOptions = {
    title: "Blood Requests List",
    drawerIcon: ({ tintColor }) => (
      <Icon type="FontAwesome" name="list" style={{ fontSize: 24, color: tintColor }}></Icon>
    )
  }

  requests = [
    {
      name: "Ali",
      noOfBags: 2,
      bloodGroup: "(A+)",
      facebook: "https://facebook.com",
      phone: "123456789"
    },
    {
      name: "Hammad",
      noOfBags: 1,
      bloodGroup: "(AB+)",
      facebook: "https://facebook.com",
      phone: "123456789"
    },
    {
      name: "Yousof",
      noOfBags: 4,
      bloodGroup: "(B+)",
      facebook: "https://facebook.com",
      phone: "123456789"
    }
  ];

  render() {
    return (
      <Container style={styles.mainbg}>
        <Content>
          <Header>
            <Title style={styles.title}>Blood Requests</Title>
          </Header>
          <Left>
            <Icon ios='ios-menu' android="md-menu" onPress={() => this.props.navigation.openDrawer()} style={styles.headicon} />
          </Left>
          <List style={styles.Donorlist}>
            {this.requests.map((request, index) => (
              <ListItem key={index}>
                <Body>
                  <Text>{request.name}</Text>
                  <Text note>Number of Blood Bags : {request.noOfBags}</Text>
                  <Text note>{request.bloodGroup}</Text>
                  <Text onPress={() => Linking.openURL(request.facebook)}>Click to Open Facebook URL</Text>
                </Body>
                <Right>
                  <Button transparent primary onPress={() => Communications.phonecall(request.phone, true)}>
                    <Text>Call</Text>
                  </Button>
                </Right>
              </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}

export default RequestorDashboard;