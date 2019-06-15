import { Button, Card, Container, Content, Form, Header, Icon, Input, Item, Left, Picker, Text, Title } from 'native-base';
import React, { Component } from "react";
import styles from './stylizing';

class BCADonor extends Component {
  static navigationOptions = {
    drawerLabel:()=> null, 
  };
  state = {
    selected: "key2"
  };

  onValueChange() {
    this.setState({
      selected: value
    });
  }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isSubmited: false,
  //     name: null,
  //     mobile: null,
  //     group: null,
  //     city : null,
  //     fburl: null,
  //     donors: [],
  //     grouptoBeFiltered: null,
  //   };
  // }

  // componentDidMount() {
  //   this.timer=setInterval(() =>this.getDonor(), 1000);
  // }
  
  // async getDonor() {     
  //       return fetch(`https://bloodbankauth-3e0b1.firebaseio.com//donors.json`)
  //       .then((response) => response.json())
  //       .then((responseJson) => {
  //         this.setState({
  //           donors: Object.values(responseJson),
  //         });
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });   
  // }

  // addDonor = (name, mobile, group, city, fburl) => {
  //   if(this.state.name != null && this.state.mobile != null && this.state.group != null){ 
  //     fetch('https://bloodbankauth-3e0b1.firebaseio.com//donors.json', {
  //       method: 'POST',
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         "name": name,
  //         "mobile": mobile,
  //         "group": group,
  //         "city": city,
  //         "fburl": fburl,

  //       }),
  //     })
  //     .then(() => this.props.navigation.navigate('Available_Donors'))
  //     .then((response) => response.json())
  //     .then((responseData) => {
  //             if(responseData.name != null ){
  //               this.setState({
  //                   name: null,
  //                   mobile: null,
  //                   group: null,
  //                   city: null,
  //                   fburl: null,
  //                   isSubmited: true,
  //                 })              
  //             }
  //             else{
  //             Alert.alert(
  //               'Oops !',
  //               'Something went wrong',
  //               [
  //                 {text: 'OK', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
  //               ],
  //               { cancelable: false }
  //             )
  //           }

  //     })
  //     .done();
  //   }
  //     else{
  //       Alert.alert(
  //         'Oops !',
  //         'You forgot some field. Please fill it before submitting',
  //         [
  //           {text: 'OK', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
  //         ],
  //         { cancelable: false }
  //       )        
  //     }
    
  // };

  // onValueChange(value) {
  //   this.setState({
  //     group: value
  //   });
  // }

    // onValueChange2(value) {
    //   this.setState({
    //     grouptoBeFiltered: value
    //   });
    // }

    // _toggleDonorPost(){
    //     this.setState({
    //         isSubmited: false
    //     })
    // }

  render() {
    return (
      <Container style={styles.mainbg}>
        <Content>
          <Header>
            <Title style={styles.title}>Become a Donor</Title>
          </Header>
          <Left>
            <Icon ios='ios-menu' android="md-menu" onPress={() => this.props.navigation.openDrawer()}
              style={styles.headicon} />
          </Left>
          <Card style={styles.donorform}>
            <Form>
              <Item>
                <Input placeholder="Full Name" />
              </Item>
              <Item>
                <Input placeholder="Mobile Number" keyboardType = { "phone-pad" }   />
              </Item>
              <Item>
                <Input placeholder="Age" keyboardType = { "phone-pad" }/>
              </Item>
              <Item>
                <Input placeholder="City"  />
              </Item>
              <Item>
                <Input placeholder="Facebook Link"   />
              </Item>
              <Content>
                <Text style={styles.BGroup}>Your Blood Group</Text>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="arrow-down" />}
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange.bind(this)}
                >
                  <Picker.Item label="(A+)" value="key0" />
                  <Picker.Item label="(A-)" value="key1" />
                  <Picker.Item label="(B+)" value="key2" />
                  <Picker.Item label="(B-)" value="key3" />
                  <Picker.Item label="(O+)" value="key4" />
                  <Picker.Item label="(O-)" value="key5" />
                  <Picker.Item label="(AB+)" value="key6" />
                  <Picker.Item label="(AB-)" value="key7" />
                </Picker>
                <Button full success onPress={ () =>this.props.navigation.navigate('Available_Donors')} >
                  <Text>Register Now</Text>
                </Button>
              </Content>
            </Form>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default BCADonor;
