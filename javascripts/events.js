"use strict";

let Tmdb = require('./searchTMDB.js');

function addCardListeners(){
	$(".card-fixed").click(Tmdb.findTMDB);
}

module.exports = {addCardListeners};