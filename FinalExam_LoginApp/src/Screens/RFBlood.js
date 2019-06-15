import { Button, Card, Container, Content, Form, Header, Icon, Input, Item, Left, Picker, Text, Title } from 'native-base';
import React, { Component } from "react";
import styles from './stylizing';

class RFBlood extends Component {
  static navigationOptions = {
    title: "Add Blood Request",
    drawerLabel:()=> null,
  }

  state = {
    selected: "key2"
  };

  onValueChange() {
    this.setState({
      selected: value
    });
  }

  render() {
    return (
      <Container style={styles.mainbg}>
        <Content>
          <Header>
            <Title style={styles.title}>Add Blood Request</Title>
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
                <Input placeholder="Mobile Number" keyboardType = { "phone-pad" } />
              </Item>
              <Item>
                <Input placeholder="Age" keyboardType = { "phone-pad" } />
              </Item>
              <Item>
                <Input placeholder="Number of Blood Bags" />
              </Item>
              <Item>
                <Input placeholder="City" />
              </Item>
              <Item>
                <Input placeholder="Facebook Link" />
              </Item>
              <Content>
                <Text style={styles.BGroup}>Which Blood Group You Need</Text>
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

                <Button full danger onPress={() => this.props.navigation.navigate('Blood_Requests')}>
                  <Text>Request Now</Text>
                </Button>
              </Content>
            </Form>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default RFBlood;