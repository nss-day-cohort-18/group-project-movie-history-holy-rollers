"use strict";

let Tmdb = require('./searchTMDB.js');
let Print = require('./print.js');
let fbData = require('./fbData.js');


function addCardListeners(){
	$(".card").click(function(){
		let target = event.currentTarget;
		if ($(target).hasClass("loaded")){
			return;
		} else {
			Tmdb.findTMDB()
			.then(function(tempObj){
				console.log("Print function", tempObj.data, tempObj.targetID);
				Print.actorsPrint(tempObj.data, tempObj.targetID);
			});
		}
	});
}

function addButtonListeners(){
	$(".add-movie").click(function(){
		let movieObj = fbData.makeObj();
		fbData.addMovie(movieObj);
	});
}



module.exports = {addCardListeners, addButtonListeners};