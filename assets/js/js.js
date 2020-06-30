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
    var queryURL = "https://wger.de/api/v2/exercise/?muscles=" + id + "&" + "limit=100&" + "007b3444879798f58c703a831e696dc56e7d9bda" + "&language=2";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);

      for (var i = 0; i < 6;) {
        // var randomEx = (Math.floor(Math.random() * response.results.length))

        var cardContainer = $("<ul>")


        // var randomNum2 = randomNum(response.results.length)
        
    var randomNum2 = rando(0, (response.results.length - 1));

        var exerciseName = response.results[randomNum2].name;
        console.log(exerciseName)
        var exerciseDescription = response.results[randomNum2].description;

        const excludeNonsense = nonsense(exerciseName);
        const excludeBlanks = blankNonsense(exerciseDescription)

        if (excludeNonsense && excludeBlanks) {
         
          // if (exerciseName != exercisePop.val){
            i++;

          var lineOne = $("<hr><li class='title is-4'>").html(exerciseName);
          cardContainer.append(lineOne)
          var lineTwo = $("<li class='content'>").html(exerciseDescription);
          cardContainer.append(lineTwo)

          console.log(response.results[randomNum2])
          $("#cardContent").append(cardContainer);
          
         
        }
      }





    });




    // Variables to exclude from the search
    function nonsense(exerciseName) {
      return exerciseName != "Arms" && exerciseName != "Awesome" && exerciseName != "Nuevo Ejercicio" && exerciseName != "Dumbbells on Scott Machine" && exerciseName != "Bigmarms"
        && exerciseName != "Curl su Panca a 45°" && exerciseName != "Bicep Curls" && exerciseName != "Bicep" && exerciseName != "Bicep Curl Dumbell (Prise Hammer)" && exerciseName != "Chin Ups" && exerciseName != ""
        && exerciseName != "2 Handed Kettlebell Swing" && exerciseName != "Aalex Gambe Alte al Muro" && exerciseName != "Abcd" && exerciseName != "Arnold Shoulder Press" && exerciseName != "Back, Shoulder, And Leg Stretching."
        && exerciseName != "Barbell Bench Press" && exerciseName != "Zercher Cycle" && exerciseName != "Wyciskanie Skos" && exerciseName != "Walking" && exerciseName != "Upper Body"
        && exerciseName != "Triceps Bench Press One Barbell" && exerciseName != "Treee" && exerciseName != "Swim" && exerciseName != "Trazioni Alla Sbarra Presa Inversa" && exerciseName != "Test Pullups" && exerciseName != "Test Ex1"
        && exerciseName != "TestBicep" && exerciseName != "Test" && exerciseName != "Swimming" && exerciseName != "Squat Jumps" && exerciseName != "Snatch" && exerciseName != "Shay"
        && exerciseName != "Seatups" && exerciseName != "Sads" && exerciseName != "Run/Walk" && exerciseName != "Run - Interval Training " && exerciseName != "Rowing, Lying on Bench" && exerciseName != "ExerA"
        && exerciseName != "Chin-ups" && exerciseName != "my Exercise" && exerciseName != "Power Clean" && exerciseName != "Free Weight Lats Pulldown" && exerciseName != "Bike Ride" && exerciseName != "Triceps Machine"
        && exerciseName != "Selectorized Seated Cable Row," && exerciseName != "Shoulder Press, Barbell" && exerciseName != "" && exerciseName != "" && exerciseName != "" && exerciseName != ""
        && exerciseName != "" && exerciseName != "" && exerciseName != "" && exerciseName != "" && exerciseName != "" && exerciseName != ""
        && exerciseName != "" && exerciseName != "" && exerciseName != "" && exerciseName != "" && exerciseName != "" && exerciseName != ""
        && exerciseName != "" && exerciseName != "" && exerciseName != "" && exerciseName != " " && exerciseName != "" && exerciseName != "";
    }
    function blankNonsense(exerciseDescription) {
      return exerciseDescription != "";
    }
    function randomNum(max) {

      return Math.floor(Math.random() * (max));

    }


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



  // var exercisePop = ["Butterfly Reverse", "Arms",
  // "Awesome", "Nuevo Ejercicio", "Dumbbells on Scott Machine",
  // "Curl su Panca a 45°", "Bicep Curls", "Billexercise", "Dumbbell Squat", "Leg Curls (sitting)", "Fly With Cable",
  // "Free Weight Lats Pulldown", "Chin Ups", "BenchPress", "Bigmarms", "my Exercise", "Pullup",
  // "Rowing Machine", "Sads", "shay", "Test", "Upper Body", "Bicep", "Bicep Curl Dumbell (Prise Hammer)", "Bigmarms"]
