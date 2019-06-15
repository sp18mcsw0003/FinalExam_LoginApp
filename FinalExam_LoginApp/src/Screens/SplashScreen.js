import { Container } from 'native-base';
import React, { Component } from "react";
import { ActivityIndicator, ImageBackground } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import styles from './stylizing';

export default class SplashScreen extends Component {
    static navigationOptions = {
        header: null
    }

    componentDidMount() {
        setTimeout(() => {
            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'Signin' })],
            });
            this.props.navigation.dispatch(resetAction);
        }, 2000)
    }

    render() {
        return (
            <Container>
                <ImageBackground source={require('../images/mainbg.png')} style={styles.mainbg}>
                    <ActivityIndicator size={50} style={{ position: "absolute", alignSelf: "center", bottom: 100 }} color="red" />
                </ImageBackground>
            </Container>

        );
    }
}