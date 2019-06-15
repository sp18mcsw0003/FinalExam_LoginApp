import { Button, Card, Container, Content, Form, Input, Item, Text } from 'native-base';
import React, { Component } from "react";
import { ImageBackground } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import styles from './stylizing';
import firebase from 'firebase';

class Signin extends Component {
  static navigationOptions = {
    header:null,
    drawerLabel: () => null,
  }
  state = { email: '', password: '', errorMessage: null }
  handleSignUp = () => {
    // TODO: Firebase stuff...
    const { email, password } = this.state
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Signin'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }
  render () {
      return (
          <Container>
            <ImageBackground source={require('../images/editedMain.jpg')} style={styles.mainscreen}>
              <Content style={{width:"80%",alignSelf:"center",marginTop:"70%"}}>
                <Text style={{color:"#fff",textAlign:"center",fontWeight:"bold",fontSize:35}}>SIGN UP</Text>
                {this.state.errorMessage &&
          <Text style={{ color: 'yellow' , textAlign: 'center' }}>
            {this.state.errorMessage}
          </Text>}
                <Card style = {styles.donorform}> 
                  <Form>
                    <Item>
                      <Input placeholder="Email Address" onChangeText={email => this.setState({ email })}
          value={this.state.email} />
                    </Item>
                    <Item>
                      <Input placeholder="Password"
                      secureTextEntry = {true} onChangeText={password => this.setState({ password })}
                      value={this.state.password}
                      />
                    </Item>
                    <Button full danger onPress={this.handleSignUp}>
                      <Text>create account</Text>
                    </Button>
                  </Form>
                </Card><Button full transparent light onPress={() => this.props.navigation.navigate('Signin')}>
            <Text>i already have an account</Text>
             </Button>
              </Content> 
            </ImageBackground>
          </Container>
      );
  }
}

export default Signin;
