console.log('the bot is starting OMG');

// import the twit package
var Twit = require('twit');

// import the twitter keys and token from twit_config.js
var config = require('./twit_config');

// making a new twitter object with config (containing the keys)
var T = new Twit(config);




//  search twitter for all tweets containing the word 'banana' since July 11, 2011
// %23 is 'hastag', example: %23batman is #batman
// T.get('search/tweets', { q: '%23batman', count: 2 }, function(err, data, response) {
//   // this prints out the whole json data
//   //console.log(data)

//   // // this prints out just the text
//   var tweets = data.statuses;
//   for (var i=0; i<tweets.length; i++){
//   	console.log(tweets[i].text);
//   }
// })





// grabbing the tweets every 5 seconds
setInterval(grabTweet, 5000);

function grabTweet(){

T.get('search/tweets', { q: '%23batman', count: 2 }, function(err, data, response) {
// this prints out the whole json data
//console.log(data)

// // this prints out just the text
var tweets = data.statuses;

if (tweets == null){
	console.log('Waiting for tweets...');
}

for (var i=0; i<tweets.length; i++){
	console.log(tweets[i].text);
	}
})


}





