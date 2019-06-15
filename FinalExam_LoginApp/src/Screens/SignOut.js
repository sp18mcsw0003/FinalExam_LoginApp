import { Button, Card, Container, Content, Form, Input, Item, Text , Icon ,Header , Title ,Left} from 'native-base';
import React, { Component } from "react";
import { Image } from 'react-native';
import styles from './stylizing';
import firebase from 'firebase';

export default class SignOut extends Component {
  static navigationOptions = {
    title: "Sign Out",
    drawerIcon: ({ tintColor }) => (
      <Icon type="FontAwesome" name="sign-out" style={{ fontSize: 24, color: tintColor }}></Icon>
    )
  }
  render() {
    return (
  
            <Container style={styles.mainbg}>
            <Header>
             <Title style={styles.title}>Sign Out</Title>
             </Header>
              <Left>
            <Icon ios='ios-menu' android="md-menu" onPress={() => this.props.navigation.openDrawer()}
              style={styles.headicon} />
          </Left>
              <Content style = {styles.custom}>
              <Card style = {styles.myCard}>
              <Image source={require('../images/exit.png')} style = {styles.signoutscreen}/>
              <Button full success onPress={() => this.props.navigation.navigate('Signin')}>
              <Text> Sign Out</Text>
              </Button>
              </Card>
              </Content>
          </Container>
   );
  }
}