"use strict";

var fbSearch = {};
fbSearch.getUserData = function (userID)
{
	return new Promise(
	function(resolve, reject)
	{
		$.ajax(
		{
			method: 'GET',
			url: `https://netflixorchill-ea086.firebaseio.com/results.json?orderBy="uid"&equalTo="${userID}"`
		})
		.done( (userData) => {

				console.log('firebase request:',userData);
				resolve(userData);
		});
	});
};


module.exports = fbSearch;

