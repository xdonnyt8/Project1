var endpoint = "";
// var queryURL = "https://wger.de/api/v2/" + endpoint + "/" +  key;
var queryURL = "https://wger.de/api/v2/" + "?217452dcb87aabe91d2071261915796cb41761c2007b3444879798f58c7";


$.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

        });


var rickKey = "AIzaSyDoNHm29IP6HZeVrcltuCkZ1AMzrhnNZTs"
var queryURLx = "https://maps.googleapis.com/maps/api/place/findplacefromtext/output?parameters/?" + "key=" + rickKey;

$.ajax({

            url: queryURLx,
            method: "GET"
        }).then(function (response) {
            console.log(response);

        });

