
import React, { Component } from "react";
import { ImageBackground  , Image} from 'react-native';
import styles from './stylizing';
import { Button, Container, Content, Icon, Left, Text , Header , Card , CardItem , Title, Body } from 'native-base';
import firebase from 'firebase';

class  MyBlooddonation extends Component {
    static navigationOptions = {
        title: "My Blood Donation",
       drawerIcon: ({ tintColor }) => (
            <Icon name="person" style={{ fontSize: 24, color: tintColor }}></Icon>
        )
    }

    render() {
   
        return (
            <Container> 
                <ImageBackground source={require('../images/allbgs.png')} style={styles.mainbg}>
                <Content>
          <Header>
            <Title style={styles.title}>My Blood Donation</Title>
          </Header>
          <Left>
            <Icon ios='ios-menu' android="md-menu" onPress={() => this.props.navigation.openDrawer()}
              style={styles.headicon} />
          </Left>
                    
                <Content padder>
         <Card>
          <CardItem footer bordered>
             <Text>Donation Details</Text>
              </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                Name : Imtiaz
                </Text>
                <Text>
                CNIC : 42101-123456-7
                </Text>
                <Text>
                Email Adress : Imtiaz@yahoo.com
                </Text>
                <Text>
                Blood Group : AB+
                </Text>
                <Text>
                Age : 35
                </Text>
                <Text>
                City : Karachi
                </Text>
              </Body>
           </CardItem>
         </Card>
        </Content>
           </Content>
                </ImageBackground>
            </Container>
        );
    }
}

export default MyBlooddonation;