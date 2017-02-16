"use strict";

let user = require("./user");
let fbData = {};


fbData.makeObj = function(){
	let button = event.currentTarget;
	let movieObj = {
    title: $(button).attr("title"),
    release_date: $(button).attr("date"),
    poster_path: $(button).attr("poster"),
    overview: $(button).attr("plot"),
    id: $(button).attr("movieid"),
    uid: user.getUser() // include uid to the object only if a user is logged in.
  };
  console.log(movieObj);
  return movieObj;
};


fbData.addMovie = function(Obj) {
    return new Promise(function(resolve, reject){
        $.ajax({
            url: 'https://netflixorchill-ea086.firebaseio.com/movies.json',
            type: 'POST',
            data: JSON.stringify(Obj),
            dataType: 'json'
        }).done(function(){
            resolve();
        });
    });
};


module.exports = fbData;