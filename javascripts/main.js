"use strict";

let db = require("./getFirebase.js"),
	cards = require("./makeCards.js");

///////////////////////////////////////////////
/////////// EVENT LISTENERS ///////////////////
///////////////////////////////////////////////
console.log("We're listening!");

/////////// USER SIGN-IN BUTTON ///////////////
$("#signIn").click(function() {
	console.log("sign in user");
});

$("#signOut").click(function(){
	location.reload();
});

/////////// SEARCH BAR //////////////////

$("#search").keydown(function(tomato){
	console.log("i'm a button!");
	if(tomato.keyCode === 13) {
		console.log("press enter to search");
		let search = $("#search").val();
		console.log("search", search);
	}
});






/////////// FILTER EVENT LISTENERS ////////////
$("#showUntrackedBtn").click(function (){
	console.log("showUntrackedBtn",this);
	$("#breadCrumbs").text("Holy Rollers' Movie History > Untracked");
});

$("#showUnwatchedBtn").click(function (){
	console.log("showUnwatchedBtn",this);
	$("#breadCrumbs").text("Holy Rollers' Movie History > Unwatched");
});

$("#showWatchedBtn").click(function (){
	console.log("showWatchedBtn",this);
	$("#breadCrumbs").text("Holy Rollers' Movie History > Watched");
});

$("#favoritesBtn").click(function (){
	console.log("favoritesBtn",this);
	$("#breadCrumbs").text("Holy Rollers' Movie History > Favorites");
});