"use strict";
console.log("Hello from searchNewMovie");

let $ = require("jquery");

//user types in movie name
//user presses the Enter key

//the input is stored in a variable
// var userMovieInput = $(":input").attr('type').val();
var userMovieInput = "Star Wars";
console.log("userMovieInput", userMovieInput);

//the results from the invoked function are stored in a movie db variable
$.ajax('https://api.themoviedb.org/3/search/movie?query=' + movie + 
		'&api_key=1425d42c47a975ca77e4f3f66bcb94d2&include_adult=false')
.then(function(response));
// console.log("Response from api", response);
}

//invoke the function
apiCall(userMovieInput);


// function searchNewMovie(movie) {
// 	console.log("movie", movie);
// 	return new Promise(function(resolve, reject){
// 		$.ajax('https://api.themoviedb.org/3/search/movie?query=' + movie + 
// 				'&api_key=1425d42c47a975ca77e4f3f66bcb94d2&include_adult=false')
// 		.then(function(response));
// 		// console.log("Response from api", response);
// 	}
// };

//the movie name, the poster, year released, the actors, and the "add to watchlist" link are displayed
//https://api.themoviedb.org/3/search/movie?query=star+wars&api_key=1425d42c47a975ca77e4f3f66bcb94d2&include_adult=false
//$('#movieOutput').append(theListBelow)
//.original_title
//.poster_path
//.release_date
//.Actors
//<a href="javascripts/addNewMovie.js">Add to Watchlist</a>

//export variables to other js files
module.exports = {apiCall};
