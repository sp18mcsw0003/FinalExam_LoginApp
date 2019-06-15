import { Body, Button, Container, Content, Header, Icon, Left, List, ListItem, Right, Text, Title } from 'native-base';
import React, { Component } from "react";
import { Linking } from 'react-native';
import styles from './stylizing';

class BloodBanks extends Component {
  static navigationOptions = {
    title: "Blood Banks",
    drawerIcon: ({ tintColor }) => (
      <Icon type="FontAwesome" name="building-o" style={{ fontSize: 20, color: tintColor }}></Icon>
    )
  }

  banks = [
    {
      title: "Aga Khan University Hospital Blood Bank",
      addr: "Aga Khan University Hospital, Karachi, Karachi City, Sindh 75300, Pakistan",
      directions: "https://goo.gl/maps/RDC45aXtQCFdgq4U7",
      phone: "+922134861558"
    },
    {
      title: "PWA Blood Bank",
      addr: "New Labour Colony Nanakwara, Karachi, Karachi City, Sindh, Pakistan",
      directions: "https://goo.gl/maps/fQfA6gqL4B8pQjho9",
      phone: "+922132735214"
    },
    {
      title: "Rehman Blood Bank",
      addr: "Z-C,27 Mezzanine Floor, Sector-1, Near Taj Medical Complex، Zainabia Rd, Central Jacob Lines, Karachi, Karachi City, Sindh, Pakistan",
      directions: "https://goo.gl/maps/J3Jrn6YQt1X2LuE36",
      phone: "+922132782030"
    },

  ];

  render() {
    return (
      <Container style={styles.mainbg}>
        <Content>
          <Header>
            <Title style={styles.title}>Blood Banks List</Title>
          </Header>
          <Left>
            <Icon ios='ios-menu' android="md-menu" onPress={() => this.props.navigation.openDrawer()}
              style={styles.headicon} />
          </Left>
          <List style={styles.Donorlist}>
            {this.banks.map((bank, index) => (
              <ListItem thumbnail key={index}>
                <Body>
                  <Text numberOfLines={1}>{bank.title}</Text>
                  <Text note numberOfLines={1}>{bank.addr}</Text>
                  <Text onPress={() => Linking.openURL('tel:' + bank.phone)}>Phone : {bank.phone}</Text>
                </Body>
                <Right>
                  <Button transparent onPress={() => Linking.openURL(bank.directions)}>
                    <Icon type="FontAwesome" name="map-marker" />
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

export default BloodBanks;