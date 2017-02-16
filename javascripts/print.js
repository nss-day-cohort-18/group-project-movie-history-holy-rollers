"use strict";

let cardTemplate = require("../templates/card-template.hbs");
let actorTemplate = require("../templates/reveal-partial.hbs");
let Print = {};

Print.tmdbPrint = function(data){
	let newDiv = document.createElement("div");
	newDiv.innerHTML = cardTemplate(data);
	$("#card-div").append(newDiv);
};

Print.tmdbClear = function(){
	$("#card-div").empty();
};

Print.actorsPrint = function(data, id){
	let newDiv = document.createElement("div");
	newDiv.innerHTML = actorTemplate(data);
	$("#actor-reveal-"+id).append(newDiv);
	console.log($("#actor-reveal-"+id));
};

Print.filterPage = function(data){
	for (var x in data){
		if(true){
			var movieID = data[x].id;
			$(".card-fixed[id='"+movieID+"']").remove();
		}
	}
};


module.exports = Print;