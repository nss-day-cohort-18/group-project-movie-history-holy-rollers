"use strict";

//this is a change
//
//
// let $ = require('jquery');

///////////////////////////////////////////////
/////////// EVENT LISTENERS ///////////////////
///////////////////////////////////////////////
console.log("Main Loaded");

/////////// USER SIGN-IN BUTTON ///////////////
$("#auth-button").click(function(event) {
	console.log("Sign in User");
});

$("#signOut").click(function(){
	location.reload();
});

/////////// SEARCH BAR //////////////////

$("#search").keydown(function(tomato){
	console.log("search button!");
	if(tomato.keyCode === 13) {
		console.log("press enter to search");
		let search = $("#search").val();
		console.log("search", search);
	}
});


/////////// FILTER EVENT LISTENERS ////////////
$("#showUntrackedBtn").click(function (){
	console.log("showUntrackedBtn",this);
});

$("#showUnwatchedBtn").click(function (){
	console.log("showUnwatchedBtn",this);
});

$("#showWatchedBtn").click(function (){
	console.log("showWatchedBtn",this);
});

$("#favoritesBtn").click(function (){
	console.log("favoritesBtn",this);
});

//