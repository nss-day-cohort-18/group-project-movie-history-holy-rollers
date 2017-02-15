"use strict";

//required//
let firebase = require("./configureFirebase.js"),
	provider = new firebase.auth.GoogleAuthProvider(),
	currentUser = null;

firebase.auth().onAuthStateChanged( function(user){
	if (user) {
		console.log("currentUser logged in", currentUser);
		currentUser = user.uid;
		document.getElementById('auth-button').textContent = 'Signed In';

	} else {
		currentUser = null;
		console.log("currentUser not logged in");
	}
});



function logInGoogle() {
	return firebase.auth().signInWithPopup(provider);
}

// function logOut(){
// 	return firebase.auth().signOut();
// }

// function getUser(){
// 	return currentUser;
// }

// function setUser(val){
// 	currentUser = val;
// }

module.exports = {logInGoogle};
