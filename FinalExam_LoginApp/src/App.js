import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import ReduxThunk from "redux-thunk";

import reducers from "./reducers";
import firebase from "firebase";
import Router from "./Router";

class App extends Component 
{
    componentWillMount() {
        const firebaseConfig = {
            apiKey: "AIzaSyBeA_N-ckbmdaMm-0EiP0M4bqZflrh59GI",
            authDomain: "tech-app-15254.firebaseapp.com",
            databaseURL: "https://tech-app-15254.firebaseio.com",
            projectId: "tech-app-15254",
            storageBucket: "tech-app-15254.appspot.com",
            messagingSenderId: "576452592212",
            appId: "1:576452592212:web:500de22e94eae0ef"
        };
        firebase.initializeApp(firebaseConfig); 
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router/>
            </Provider>   
            );
        }
}

export default App;

