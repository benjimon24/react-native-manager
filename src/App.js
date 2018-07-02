import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { View } from 'react-native';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import { Header } from './components/common';

class App extends Component {
  state = {};

  componentWillMount = () => {
    const config = {
      apiKey: 'AIzaSyDNzgy-u5yAEHRh-nB3msvgH6xqtj7Vr2I',
      authDomain: 'react-native-manager-30803.firebaseapp.com',
      databaseURL: 'https://react-native-manager-30803.firebaseio.com',
      projectId: 'react-native-manager-30803',
      storageBucket: 'react-native-manager-30803.appspot.com',
      messagingSenderId: '941558670174'
    };
    firebase.initializeApp(config);
  };

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Header headerText="Manager" />
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
