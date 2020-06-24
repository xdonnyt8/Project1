var endpoint = "";
// var queryURL = "https://wger.de/api/v2/" + endpoint + "/" +  key;
var queryURL = "https://wger.de/api/v2/" + "?217452dcb87aabe91d2071261915796cb41761c2007b3444879798f58c7";


$.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

        });

var yelpKey = "mPsfs7mhH6BODbu6jrYiS1QSDo0s8lxpNkdPVTet2qp0AHaJ61lp2oyqJ_2MRiJaCBqEIebiD8tCpIxAYE5hU_4ZXJqlYU1eQPmOkfPDADRkp9yXyy8VOWSOvabyXnYx";

var queryURL1 = "https://api.yelp.com/v3/businesses/search?location=NewYorkCity?" + yelpKey;  

$.ajax({
    url: queryURL1,
    method: "GET"
}).then(function (response) {
    console.log(response);

});




// var rickKey = "AIzaSyDoNHm29IP6HZeVrcltuCkZ1AMzrhnNZTs"
// var queryURLx = "https://maps.googleapis.com/maps/api/place/textsearch/xml?query=restaurants+in+Sydney&key=" + rickKey;

// $.ajax({

//             url: queryURLx,
//             method: "GET"
//         }).then(function (response) {
//             console.log(response);

//         });

