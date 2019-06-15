
import React, { Component } from "react";
import { ImageBackground  , Image} from 'react-native';
import styles from './stylizing';
import { Button, Container, Content, Icon, Left, Text , Card } from 'native-base';

class HomeScreen extends Component {
    static navigationOptions = {
        header:null,
        title: "Home",
       drawerIcon: ({ tintColor }) => (
            <Icon name="home" style={{ fontSize: 24, color: tintColor }}></Icon>
        )
      }
      state = { currentUser: null }
    render() {
        const { currentUser } = this.state
        return (
            <Container> 
                <ImageBackground source={require('../images/allbgs.png')} style={styles.mainbg}>
                    <Content>
                        <Left>
                            <Icon ios='ios-menu' android="md-menu" onPress={() => this.props.navigation.openDrawer()}
                                style={styles.headiconmain} />
                        </Left>
                    </Content>
                    <Content style={styles.mainbtn}>
                    <Card style = {styles.myCard}>
                    <Image source={require('../images/handshake.png')} style = {styles.handshake}/>
                    
                     <Button full success onPress={() => this.props.navigation.navigate('Become_a_Donor')}>   
                            <Text>
                                Become a Donor
                            </Text>
                        </Button>
                        </Card>
                        <Card>
                        <Image source={require('../images/blood-drop.png')} style = {styles.blooddrop}/>
                         <Button full  danger onPress={() => this.props.navigation.navigate('Request_For_Blood')}>
                            <Text>
                                Request for blood
                            </Text>
                        </Button>
                        </Card>
                    </Content>
                </ImageBackground>
            </Container>

        );
    }
}

export default HomeScreen;


                       