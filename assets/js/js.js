$(document).ready(function () {
  
  var select = "";
  console.log(select)

  $('#selector').change(function (e) {
    e.preventDefault()
    select = $(this).val()
    $("#display").empty();
    firstCall(select)
    
  });

  // Gathering the Name of the exercise and description of muscle 
  function firstCall(id) {
    $(("#card")).removeClass("hide");
    var queryURL = "https://wger.de/api/v2/exercise/?muscles=" + id + "&" + "007b3444879798f58c703a831e696dc56e7d9bda" + "&language=2";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      console.log(response.results[3].description)

    //creating setting the responses to variables

      var exerciseName = $("#exerciseName");
      var exerciseDescription = $("#exerciseDescription");

      exerciseName.html(response.results[3].name);
      exerciseDescription.html(response.results[3].description);
      
      

      
      for (var i = 0; i < 6; i++) {

        var card = $("<div>").attr("class", "card hide has-text-centered")
        card.attr("id", "card");
        card.text("hello");
        $("selector").attr(attributeName);
      
        var exercises = response.results[i];
        var $exerciseList = $("<ul>");
        var cardContent = $("#cardContent");
      // if(response.results[i].license_author == "wger.de")
      }
      
      // //   cardContent.append(
      // //   "<div class='content has-text-centered'>" +
      // //     "<div class='title is-4 centerDiv' id='cardContent  +
      // //     "</span>" +
      // //     "<strong> " +
      // //     headline.main +
      // //     "</strong>"
      // // );

    });
  }

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
      setInterval(function(){
        var randomNum = Math.floor(Math.random() * 1643)
        var quote = (data[randomNum].text)
        var quoteDiv = $("#quotes")
        quoteDiv.text(quote);
      }, 5000);
      
    });




});

var a



  // Get the image of the exercise
// function secondCall()
//   {
//     var queryURL = "https://wger.de/api/v2/exerciseimage/?muscles=" + id + "&" + "007b3444879798f58c703a831e696dc56e7d9bda" + "&language=2";
//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     }).then(function (response) {
//       console.log(response);
//       var exerciseName = response.results[3].name;
//       console.log(exerciseName)
//       counter++
   

//     });
//   }


  // // function secAjax(id){
  // //   var endpoint = "";
  // // // var queryURL = "https://wger.de/api/v2/" + endpoint + "/" +  key;
  // // var queryURL = "https://wger.de/api/v2/excerise/?muscle=2&" + "007b3444879798f58c703a831e696dc56e7d9bda";


  // // $.ajax({
  // //   url: queryURL,
  // //   method: "GET"
  // // }).then(function (response) {
  // //   console.log(response);
  // //   console.log(response.results[0].description)
  // //   exercise.exercise = response.exercises
  // //   counter++
  // // thirdAjax(3)

  // // });
  // }



