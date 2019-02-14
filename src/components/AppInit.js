import React, { Component } from 'react';
import firebase from '@firebase/app';
import '@firebase/auth'
import Main from './Main';
import {alreadyLogin,notLoginYet} from '../actions'
import {connect} from 'react-redux'
class AppInit extends Component {
  componentDidMount() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyAnAUvY0IkT3dLddjTMRqVyjZOGhgLWx1Y",
      authDomain: "managerjc-41f05.firebaseapp.com",
      databaseURL: "https://managerjc-41f05.firebaseio.com",
      projectId: "managerjc-41f05",
      storageBucket: "managerjc-41f05.appspot.com",
      messagingSenderId: "630919859204"
    };
    firebase.initializeApp(config);
  
  firebase.auth().onAuthStateChanged((user)=>{
      if(user){
          this.props.alreadyLogin(user)
      }else{
          this.props.notLoginYet();
      }
  })
  }

  render() {
    return (
          <Main />
    );
  }
}
export default connect(null, {alreadyLogin,notLoginYet}) (AppInit);