var url = "https://wger.de/api/v2/muscle/";
url += '?' + $.param({
  'api-key': "51698d92c596b039779271966d708d4f1ba07b56"
});
$.ajax({
  url: url,
  method: 'GET',
  dataType: 'JSON',
  success: function (data) {
    console.log(data)
  },
  error: function (err) {
    console.log('error:' + err)
  }
})


var endpoint = "";
// var queryURL = "https://wger.de/api/v2/" + endpoint + "/" +  key;
var queryURL = "https://wger.de/api/v2/exercise/?muscle=2&language=2" + "&007b3444879798f58c703a831e696dc56e7d9bda";


$.ajax({
  url: queryURL,
  method: "GET"
}).then(function (response) {
  console.log(response);
  console.log(response.results[0].description)


});



fetch("https://type.fit/api/quotes")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    var randomNum = Math.floor(Math.random() * 1643)
    var quote = (data[randomNum].text)
    var quoteDiv = $("#quotes")
    quoteDiv.text(quote);
  });





var yelpKey = "mPsfs7mhH6BODbu6jrYiS1QSDo0s8lxpNkdPVTet2qp0AHaJ61lp2oyqJ_2MRiJaCBqEIebiD8tCpIxAYE5hU_4ZXJqlYU1eQPmOkfPDADRkp9yXyy8VOWSOvabyXnYx";



var queryURL1 = "https://api.yelp.com/v3/businesses/search?location=New York City/?" + yelpKey;

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








// var rickKey = "AIzaSyCfMXFMDU8B8So2xUI2efm3iPtiikMiNYU"

// var rickKey = "AIzaSyDoNHm29IP6HZeVrcltuCkZ1AMzrhnNZTs"

// var queryURLx = "https://maps.googleapis.com/maps/api/place/textsearch/xml?query=restaurants+in+Sydney&key=" + rickKey;

// $.ajax({

//             url: queryURLx,
//             method: "GET"
//         }).then(function (response) {
//             console.log(response);


//         });


//         });