"use strict";


//***********************************
//Tmdb API namespace initialization
//***********************************
let 	key = 'ef211d0a57225ce857a7822b3a8ed69f',
	   data = {},
 posterURLs = [],
	   Tmdb = {key, data, posterURLs};

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

//In getPosters() we apply the data results to the global Tmdb object
//and set the image url paths. 'this.result' is an object, while
//'this.posterURLs' is an array.
// Tmdb.getPosters = function(data)
// {
// 	console.log(data);
// 	this.data = data;
// 	for(var i = 0; i < this.result.length; i++)
// 	{
// 		this.posterURLs[i] = this.imagePrefix + this.result[i];
// 	}
// 	console.log(this.posterURLs);
// };





module.exports = Tmdb;