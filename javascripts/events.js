"use strict";

let Tmdb = require('./searchTMDB.js');
let Print = require('./print.js');


function addCardListeners(){
	$(".card-fixed").click(function(){
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
module.exports = {addCardListeners};