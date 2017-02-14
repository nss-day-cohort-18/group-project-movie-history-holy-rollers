"use strict";
console.log("Hello from searchNewMovie");

let $ = require("jquery");

//user types in movie name
//user presses the Enter key
// $(":input").keypress(function(event) {
// 	 if (event.which == 13) {
// 	    event.preventDefault();
// 	 }
// });

//the input is stored in a variable
// var userMovieInput = $(":input").attr('type').val();
var userMovieInput = "Star Wars";
console.log("userMovieInput", userMovieInput);

//the input variable is used in an invoked function call
//the results from the invoked function are stored in a movie db variable
function apiCall(movie) {
	console.log("movie", movie);
	$.ajax('https://api.themoviedb.org/3/search/movie?query=' + movie + 
			'&api_key=1425d42c47a975ca77e4f3f66bcb94d2&include_adult=false')
	.then(function(response));
	// console.log("Response from api", response);
}

//invoke the function
apiCall(userMovieInput);

// function() {
//   var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
//   $.getJSON( flickerAPI, {
//     tags: "mount rainier",
//     tagmode: "any",
//     format: "json"
//   })
//     .done(function(data) {
//       $.each(data.items, function(i, item) {
//         $("<img>").attr("src", item.media.m).appendTo("#images");
//         if (i === 3) {
//           return false;
//         }
//       });
//     });
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