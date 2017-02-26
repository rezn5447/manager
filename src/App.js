import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
  // Initialize Firebase
  const config = {
    apiKey: 'AIzaSyCZz_pfTnOXNlV8Cg5e7bWITYtNgFxZUTg',
    authDomain: 'manager-3fec3.firebaseapp.com',
    databaseURL: 'https://manager-3fec3.firebaseio.com',
    storageBucket: 'manager-3fec3.appspot.com',
    messagingSenderId: '903554260120'
  };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
