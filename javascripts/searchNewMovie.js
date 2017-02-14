"use strict";

//user types in movie name
//user presses the Enter key

	// $( "#target" ).keypress(function( event ) {
 //  if ( event.which == 13 ) {
 //     event.preventDefault();
 //  }

//the input is stored in a variable = var userMovieInput = document.getElementById("").value

	// var userMovieInput = $(":input").attr('type');
	// userMovieInput.val();

//the input variable is used in an invoked function call
//the results from the invoked function are stored in a omdb variable
//the movie name, the poster, year released, the actors, and the "add to watchlist" link are displayed



function apiCall() {
	$.getJSON('https://www.omdbapi.com/?t=' + encodeURI(movie))
		.then(function(response));
	console.log("Response from api", response);
	// var variable = response
};

module.exports = {variable};