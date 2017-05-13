/**
 * Created by cesaraviles on 5/7/17.
 */
var firebase = require("firebase");

firebase.initializeApp({
  apiKey: "AIzaSyBpv7Enu-iA1t3bZCLKyH8QHTiUJtns09M",
  authDomain: "wflow-aab9e.firebaseapp.com",
  databaseURL: "https://wflow-aab9e.firebaseio.com",
  projectId: "wflow-aab9e",
  storageBucket: "wflow-aab9e.appspot.com",
  messagingSenderId: "434674446779"
});

function addUser(email, password, callback) {
  firebase.auth().createUserWithEmailAndPassword(email, password).then(function(userData){
    callback(null, userData);
  }).catch(function(error) {
    // Handle Errors here.
    callback(error);
  });
}

function authenticate(email, password, callback) {
  firebase.auth().signInWithEmailAndPassword(email, password).then(function(userData){
    callback(null, userData);
  }).catch(function(error) {
    // Handle Errors here.
    callback(error);
  });
}

function logout(callback) {
  firebase.auth().signOut().then(function (response) {
    // Sign-out successful.
    callback(null, response);
  }).catch(function (error) {
    // An error happened.
    callback(error, null);
  });
}

module.exports = {
  addUser : addUser,
  authenticate : authenticate,
  logout:logout
}
