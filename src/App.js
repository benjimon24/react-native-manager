import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    // second argument is for initial state - mostly applicable to server-side rendering
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
