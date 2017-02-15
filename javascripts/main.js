"use strict";



//*******************
// Require Variables
//*******************
let 	Tmdb = require('./searchTMDB.js');



///////////////////////////////////////////////
/////////// EVENT LISTENERS ///////////////////
///////////////////////////////////////////////


/////////// USER SIGN-IN BUTTON ///////////////
$("#auth-button").click(function() {
	console.log("sign in user");
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
			console.log(data);
		});
		// .then(
	 // 		Tmdb.getPosters()
		// );
	// 	.then( Tmdb.fillCards());
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