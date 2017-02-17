"use strict";

/*======================
External Libraries
======================*/
var fbData = require('./firebase/fbData'),
	  user = require('./firebase/user');


/*======================
Internal Function Declarations
======================*/
function deleteCard(event) {
	console.log('begin deleteCard');

	//First, get movie id from the delete button's id "delete-{{id}}".
	var prettyID = event.target.id;
	console.log('prettyID  before',prettyID);

	//remove the word "delete" from the beginning so we can compare
	//the string with our Firebase data
	prettyID = prettyID.slice(7);
	console.log('prettyID after',prettyID);

	//grab current user for .getUserData()
	var currentUser = user.getUser();

	//AJAX!!!
	fbData.getUserData(currentUser)
	//
	.then( (userMovies) => {
		console.log(userMovies);
		for (var movie in userMovies)
		{
			console.log('in the loop',movie,movie.id,prettyID);
			if (movie.id == prettyID)
			{
				console.log('in the conditional');
				var uglyID = movie;
				console.log('sending this to firebase for deletion',uglyID);
				$.ajax(
				{
					method: 'DELETE',
					url: `https://netflixorchill-ea086.firebaseio.com/results.json/${uglyID}`
				});
			}
		}
	});
}


module.exports = deleteCard;
