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




module.exports = Print;