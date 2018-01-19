const dotEnv = require("dotEnv").config();
var keyFile = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keyFile.spotify);
var Twitter = require('twitter');
var client = new Twitter(keyFile.twitter);
var userInput = process.argv[2];


var request = require("request");
var nodeArgs = process.argv; 

JSON.

var movie = function () {
	var movieName = "";

	// starting from the third array, this is where the user inputs the movie. this is pulling 
	//up the string of the movie name.
	for (var i = 3; i < nodeArgs.length; i++) {
		//if the search is not [3], it is adding it into the string 
		if (i > 3 && i < nodeArgs.length) {

			movieName = movieName + "+" + nodeArgs[i];

		} else {

			//+= is taking what i currently have, and i add on to it. 
			movieName += nodeArgs[i];

	}
}
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

request(queryUrl, function (error, response, body) {


	if (!error && response.statusCode === 200) {
		let parseBody = JSON.parse(body)
		//console.log("JSON.body: ", + parseBody);
		console.log("Release Year: " + parseBody.year);
		console.log("Movie Title: " + parseBody.Title);
		console.log("Country: " + parseBody.Country);
		console.log("Plot: " + parseBody.Plot);
		console.log("Actors: " + parseBody.Actors);
	}
  });
}

switch (userInput) {
	case "my-tweets":
	result = tweets();
	break;

case "spotify-this-song";
	result = songs();
	break;

//case "do-what-it- says":
//	result = doWhatItSays();
//	break;


};

function tweets() {
	var screenName = {
		screen_name: "juliandersius"
	};
	client.get("statuses/user_timeline", screenName, function (error, tweets, response) {
		if (!error){
			for (var i = 0; i < tweets.length; i++) {
				var date = tweets[i].created_at; 
				console.log("juliandersius: " + tweets[i].text + "Created at: " + date.substring(0,19));				
			}
		} else {
			console.log("There has been an error.");
			console.log("error")
		}
	});
}

function songs() {
	var songName = ""
	for (var i 3; i < nodeArgs.length; i++) {
		// if the search is not [3], it is adding it into the string 
		if (i > 3 && i < nodeArgs.length) {

			songName= songName + " " + nodeArgs[i]; 
		} else {

			//+= is taking what I currently have, and i add on to it. 
			songName += nodeArgs[i];


		}
	}

	console.log(songName)
	spotify.search({
		type: "track", 
		query: songName
	})
	.then(function(response) {
		console.log(response.tracks.items[0]);		
	})
	.catch(function(err) {
		console.log(err);
	});

}

//    spotify.tracks.items[3].spotify










// require("dotenv").config();
// require("./keys.js").config();
// var keys = ("keys.js");
// var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);


// Make it so liri.js can take in one of the following commands

// * `my-tweets`
// This will show your last 20 tweets and when they were created 
// at in your terminal/bash window.


// * `spotify-this-song`  '<song name here>'
// This will show the following information about the song in your terminal/bash window


// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from


// If no song is provided then your program will default to "The Sign" 
// by Ace of Base.
// You will utilize the node-spotify-api package in order to retrieve 
// song information from the Spotify API.
// Like the Twitter API, the Spotify API requires you sign up as a developer 
// to generate the necessary credentials. You can follow these steps in order 
// to generate a client id and client secret:
// Step One: Visit https://developer.spotify.com/my-applications/#!/
// Step Two: Either login to your existing Spotify account or create a new 
// one (a free account is fine) and log in.
// Step Three: Once logged in, navigate to 
// https://developer.spotify.com/my-applications/#!/applications/create 
// to register a new application to be used with the Spotify API. You can 
// fill in whatever you'd like for these fields. When finished, click the 
// "complete" button.
// Step Four: On the next screen, scroll down to where you see your client 
// id and client secret. Copy these values down somewhere, you'll need them 
// to use the Spotify API and the node-spotify-api package.



// * `movie-this`
// This will output the following information to your terminal/bash window:

//    * Title of the movie.
//    * Year the movie came out.
//    * IMDB Rating of the movie.
//    * Rotten Tomatoes Rating of the movie.
//    * Country where the movie was produced.
//    * Language of the movie.
//    * Plot of the movie.
//    * Actors in the movie.

// If the user doesn't type a movie in, the program will output data for the movie 
// 'Mr. Nobody.'

// If you haven't watched "Mr. Nobody," then you should: 
// http://www.imdb.com/title/tt0485947/
// It's on Netflix!
// You'll use the request package to retrieve data from the OMDB API. Like all of 
// the in-class activities, the OMDB API requires an API key. You may use trilogy.


// * `do-what-it-says`

// Using the fs Node package, LIRI will take the text inside of random.txt and then use 
// it to call one of LIRI's commands.


// It should run spotify-this-song for "I Want it That Way," as follows the text in 
// random.txt.
// Feel free to change the text in that document to test out the feature for other 
// commands.













