"use strict";


//***********************************
//Tmdb API namespace initialization
//***********************************
let 	key = 'ef211d0a57225ce857a7822b3a8ed69f',
	   Tmdb = {};


//*********
//Functions
//*********

//Get input value from Search bar and send the search string
//to Tmdb
Tmdb.searchTMDB = function(){
	let titleSearch = $("#title-search").val();
	return new Promise( (resolve, reject) => {
		$.ajax({
			method: 'GET',
			url: `https://api.themoviedb.org/3/search/movie?query=${titleSearch}&api_key=${key}`
		}).done( (data) => {
			console.log(data);
			resolve(data);
		});
	});
};

Tmdb.findTMDB = function(){
	let target = event.currentTarget;
	let targetID = target.id;
	$(target).addClass("loaded");
	return new Promise( (resolve, reject) => {
		$.ajax({
			method: 'GET',
			url: `https://api.themoviedb.org/3/movie/${targetID}/credits?api_key=${key}`
		}).done( (data) => {
			var tempObj = {data, targetID};
			resolve(tempObj);
			console.log(tempObj);
		});
	});
};


module.exports = Tmdb;

