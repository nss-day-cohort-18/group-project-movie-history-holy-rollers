"use strict";

const OUTPUT = $("#movieOutput"); //makes calling the movie search quicker

let cards = {};
cards.cardBuilder = (movieData) => {
	OUTPUT.html('');
	let cardString = '',
		outputString = '';
	// let movieArray = movieData.Search;

	if (Array.isArray(movieData)) {
		console.log("movieData is an array");
	} else {
		movieData = [movieData];
		console.log("movieData is NOT an array");
	}
};
