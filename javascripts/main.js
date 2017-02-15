"use strict";

//*******************
// Initialize Modals
//*******************
  $(document).ready(function(){
    $('.modal').modal();
  });


//*******************
// Require Variables
//*******************
let Tmdb = require('./searchTMDB.js');
let Print = require('./print.js');
let Events = require('./events.js');
let user = require("./user");


///////////////////////////////////////////////
/////////// EVENT LISTENERS ///////////////////
///////////////////////////////////////////////


/////////// USER SIGN-IN BUTTON ///////////////
$("#auth-button").click(function() {
	console.log("sign in user");
user.logInGoogle()
.then(function(result){
	console.log("login result", result.user.uid);
user.setUser(result.user.uid);
});
});



/////////// SEARCH BAR //////////////////

//TMDb Search Button
//check for Enter press, and if so we pass the search string to
//the API. When it returns, we perform a second search for the poster
//and the user data, which influences how we display the search results
$("#title-search").on("keyup", (event) => {
	if(event.which === 13)
	{
		console.log('13');
		Tmdb.searchTMDB().then(function(data){
			$("#title-search").val("");
			Print.tmdbClear();
			Print.tmdbPrint(data);
			Events.addCardListeners();
		});
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