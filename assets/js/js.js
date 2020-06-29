$(document).ready(function () {

  var select = "";
  console.log(select)

  $('#selector').change(function (e) {
    e.preventDefault()
    select = $(this).val()
    $("#cardContent").empty();
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

      for (var i = 0; i < 6; i++) {
        var randomEx = (Math.floor(Math.random() * response.results.length))


        var cardContainer = $("<ul>")
        var titleCard = $("<div class='title is-4'>")
        var titleDesc = $("<div class='content'>")
        var exerciseName = response.results[randomEx].name;
        var exerciseDescription = response.results[randomEx].description;

    

        var exercisePop = ["Butterfly Reverse", "Arms",
        "Awesome","Nuevo Ejercicio", "Dumbbells on Scott Machine",
        "Curl su Panca a 45°","Bicep Curls","Billexercise","Dumbbell Squat","Leg Curls (sitting)","Fly With Cable",
        "Free Weight Lats Pulldown","Chin Ups","BenchPress","Bigmarms","my Exercise","Pullup",
        "Rowing Machine","Sads","shay","Test","Upper Body","Bicep","Bicep Curl Dumbell (Prise Hammer)","bigmarms",]

        if(exerciseName != exercisePop){ 
          $(titleDesc).append(exerciseDescription);
          $(titleCard).append(exerciseName);

        }

        
      

        var lineOne = $("<li class='title is-4'>").text(exerciseName);
        cardContainer.append(lineOne)
        var lineTwo = $("<li class='content'>").text(exerciseDescription);
        cardContainer.append(lineTwo)

        console.log(response.results[randomEx])
        
        $("#cardContent").append(cardContainer);

      }


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
      setInterval(function () {
        var randomNum = Math.floor(Math.random() * 1643)
        var quote = (data[randomNum].text)
        var quoteDiv = $("#quotes")
        quoteDiv.text(quote);
      }, 5000);

    });




});




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



