"use strict";


///////////////////////////////////////////////
/////////// EVENT LISTENERS ///////////////////
///////////////////////////////////////////////


/////////// USER SIGN-IN BUTTON ///////////////
$("#signIn").click(function() {
	console.log("sign in user");
});

$("#signOut").click(function(){
	location.reload();
});

/////////// SEARCH BAR //////////////////

$("#title-search").keydown(function(tomato){
	if(tomato.keyCode === 13) {
		let search = $("#title-search").val();
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