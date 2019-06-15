import { Body, Button, Container, Content, Header, Icon, Left, List, ListItem, Right, Text, Title } from 'native-base';
import React, { Component } from "react";
import { Linking } from 'react-native';
import Communications from 'react-native-communications';
import styles from './stylizing';

class DonorDashboard extends Component {
  static navigationOptions = {
    title: "Donors List",
    drawerIcon: ({ tintColor }) => (
      <Icon type="FontAwesome" name="address-card-o" style={{ fontSize: 20, color: tintColor }}></Icon>
    )
  }

  donors = [
    {
      name: "Alisha",
      bloodGroup: "(A+)",
      location: "Karachi",
      phone: "123456789",
      facebook: "https://facebook.com/"
    },
    {
      name: "Azahr",
      bloodGroup: "(B+)",
      location: "Lahore",
      phone: "123456789",
      facebook: "https://facebook.com/"
    },
    {
      name: "Saad",
      bloodGroup: "(AB+)",
      location: "Peshawar",
      phone: "123456789",
      facebook: "https://facebook.com/"
    }
  ];

  render() {
    return (
      <Container style={styles.mainbg}>
        <Content>
          <Header>
            <Title style={styles.title}>Available Donors List</Title>
          </Header>
          <Left>
            <Icon ios='ios-menu' android="md-menu" onPress={() => this.props.navigation.openDrawer()}
              style={styles.headicon} />
          </Left>
          <List style={styles.Donorlist}>
            {this.donors.map((donnor, index) => (
              <ListItem key={index}>
                <Body>
                  <Text>{donnor.name}</Text>
                  <Text note>{donnor.bloodGroup}</Text>
                  <Text note>{donnor.location}</Text>
                  <Text onPress={() => Linking.openURL(donnor.facebook)}>Click to Open Facebook URL</Text>
                </Body>
                <Right>
                  <Button transparent primary onPress={() => Communications.phonecall(donnor.phone, true)}>
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

export default DonorDashboard;