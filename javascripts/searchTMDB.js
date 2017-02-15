"use strict";


//***********************************
//Tmdb API namespace initialization
//***********************************
let 	key = 'ef211d0a57225ce857a7822b3a8ed69f',
	   Tmdb = {};


//*********
//Functions
//*********

//Getter and setter for when our object properties are private
Tmdb.set = function(property, value)
{
	this.property = value;
};

Tmdb.get = function(property)
{
	return this.property;
};

//Get input value from Search bar and send the search string
//to Tmdb
Tmdb.searchTMDB = function(){
	let titleSearch = $("#title-search").val();
	return new Promise( (resolve, reject) => {
		$.ajax({
			method: 'GET',
			url: `https://api.themoviedb.org/3/search/movie?query=${titleSearch}&api_key=${key}`
		}).done( (data) => {
			resolve(data);
		});
	});
};

Tmdb.findTMDB = function(){
	let id = event.currentTarget;
	console.log("it works", id);
};




module.exports = Tmdb;