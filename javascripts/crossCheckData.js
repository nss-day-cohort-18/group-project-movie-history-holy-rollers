"use strict";


function crossCheck(dataObj) {
	var isUserMovie = [];
	var tmdb = dataObj.tmdb;
	var user = dataObj.user;

	console.log('hippo',tmdb);
	console.log('potamus',user);
	for(var i = 0; i < tmdbData.tmdbData.results.length; i++)
	{
		if (tmdbData.results[i].id === userData.uid)
		{
			 isUserMovie.push(true);
		}
		else
		{
			isUserMovie.push(false);
		}
	}
	return isUserMovie;
}



module.exports = crossCheck;

