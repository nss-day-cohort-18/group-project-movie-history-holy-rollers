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
let Handlebars = require('hbsfy/runtime');
let Tmdb = require('./searchTMDB.js');
let Print = require('./print.js');
let Events = require('./events.js');
let user = require("./firebase/user.js");
let crossCheck = require("./crossCheckData.js");
let fbData = require('./firebase/fbData.js');
let deleteCard = require('./deleteCard.js');



//////////////////////
//Handlebars Helper
//////////////////////

Handlebars.registerHelper("shorten", function(array){
	let shortArray = [];
	for (var i = 0; i < 4; i++) {
		shortArray.push(array[i]);
	}
	return shortArray;
});

Handlebars.registerHelper("shorten-date", function(data){
	let date = data.split("");
	let shortArray = [];
	for (var i = 0; i < 4; i++) {
		shortArray.push(date[i]);
	}
	let newDate = shortArray.join("");
	return newDate;
});



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
		Tmdb.searchTMDB().then(function(data){
			$("#title-search").val("");//1.clear user's input from field
			Print.tmdbClear();		   //2.clear display field of results
									   //from a previous search
			Print.tmdbPrint(data); 	   //3.Run search results through
									   //handlebars and print formatted results to screen
			Events.addCardListeners();
			Events.addButtonListeners();

			//begin firebase user stuff
			let currentUser = user.getUser();
			fbData.getUserData(currentUser)
			.then( (data) => {
				console.log(data);
				Print.filterPage(data);
				let resultsObj = {results:data};
				Print.tmdbPrint(resultsObj);
			}).then( () => {
				var deleteButtons = $('.delete-movie');
				for (var i = 0; i < deleteButtons.length; i++)
				{
					deleteButtons[i].addEventListener('click', deleteCard);
				}
			});
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