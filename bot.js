console.log('the bot is starting OMG');

// import the twit package
var Twit = require('twit');

// import the twitter keys and token from twit_config.js
var config = require('./twit_config');

// making a new twitter object with config (containing the keys)
var T = new Twit(config);



// %23 is 'hastag', example: %23batman is #batman


// setting the health bar
var batman_health = 0;
var trump_health = 0;
var fight_time = 120000 // two minute



// ======================================
var startTime = new Date().getTime();


var interval = setInterval(function(){

     

    // counting the time down from 3 mins at (60 seconds * 3) then clearInterval (kill the time)
    if(new Date().getTime() - startTime > fight_time){
        clearInterval(interval);
        return;
    }


     

        





    T.get('search/tweets', { q: '%23batman OR %23trump', count: 1 }, function(err, data, response) {
        // 'data' contains the returned json 

        // this stores the whole data into tweets
        var tweets = data.statuses;



        // this for loop gets to to the 'text' part
        for (var i=0; i<tweets.length; i++){

            // printing the tweet
            console.log(tweets[i].text);

            // storing the text to variable
            var temp = tweets[i].text;

        } // this ends for loop 

    


    // scan the string to see if it matches hashtag
    var find = temp.match(/#Batman/gi);
    var find2 = temp.match(/#Trump/gi);

    // display what is in variable 'find'
    console.log('this is what is in variable find: '  + find);

    // if 'find' matches the hashtag we are looking for
    if (find == "#batman" || find == "#Batman" ){
      batman_health += 10;
      console.log("Vote goes to Batman!");
      console.log(batman_health);
    }
    else if(find == null){
      console.log('waiting for another tweet');
      // increase the fight time by 5 seconds
      fight_time += 5000;
    }



    if (find2 == "#trump" || find2 == "#Trump" ){
      trump_health += 10;
      console.log("Vote goes to Trump!");
      console.log(trump_health);
    }
    else if(find2 == null){
      console.log('waiting for another tweet');
      // increase the fight time by 5 seconds
      fight_time += 5000;
    }


    // if Batman's health reaches 50
        if (batman_health == 50){
          console.log('Batman wins!!');
          console.log('Final Score: Trump = ' + trump_health + ' Batman = ' + batman_health);
          clearInterval(interval); // if Batman is defeated before the time runs out, kill the time
        }

         // if Superman's health reaches 50
        if (trump_health == 50){
          console.log('Trump wins!!');
          console.log('Final Score: Trump = ' + trump_health + ' Batman = ' + batman_health);
          clearInterval(interval); // if Batman is defeated before the time runs out, kill the time
        }


}); // end of T.get



    
}, 15000);  // <------- this wiill check tweets every 15 seconds  


















