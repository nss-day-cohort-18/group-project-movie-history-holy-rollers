"use strict";

var fbSearch = {};

fbSearch.getUserData = function (tmdbData)
{
	return new Promise(
	function(resolve, reject)
	{
		$.ajax(
		{
			method: 'GET',
			url: "https://netflixorchill-ea086.firebaseio.com"
		})
		.done( (userData) => {
				dataObj.user = userData;
				console.log('2',dataObj);
				resolve(dataObj);
			}
		);
	});
};


module.exports = fbSearch;

