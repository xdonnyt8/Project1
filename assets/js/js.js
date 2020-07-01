$(document).ready(function () {

  currentTime();

  function currentTime() {
    var time = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").html(time);
    setTimeout(currentTime, 1000);
  };



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

        var cardContainer = $("<ul>") // Create a unordered list element to be appended to the page

        var randomNum = randoSequence(0, (response.results.length - 1));  //returns the var as an array so there won't be repeating numbers

        var randomNum2 = (Math.floor(Math.random() * response.results.length)) // pick a random integer by the number of exercise

        var randomEx = randomNum[randomNum2] // set the value of the exercise to equal the number generated in the random array

        var exerciseName = response.results[randomEx].name;
        console.log(exerciseName)
        var exerciseDescription = response.results[randomEx].description;

        const excludeNonsense = nonsense(exerciseName);
        const excludeBlanks = blankNonsense(exerciseDescription)

        if (excludeNonsense && excludeBlanks) { //Condition to check for unwanted exercises 

          i++; // i will increase by one each time the if statement is met so that the for loop can keep looping until 6 exercise are appended

          var lineOne = $("<hr><li class='title is-4'>").html(exerciseName);
          cardContainer.append(lineOne)
          var lineTwo = $("<li class='content'>").html(exerciseDescription);
          cardContainer.append(lineTwo)

          console.log(response.results[randomEx])
          $("#cardContent").append(cardContainer);


        }
      }

    });




    // Word bank to exclude these exercise because they return exercises that doesn't make sense
    function nonsense(exerciseName) {
      return exerciseName != "Arms" && exerciseName != "Awesome" && exerciseName != "Nuevo Ejercicio" && exerciseName != "Dumbbells on Scott Machine" && exerciseName != "Bigmarms"
        && exerciseName != "Curl su Panca a 45°" && exerciseName != "Bicep Curls" && exerciseName != "Bicep" && exerciseName != "Bicep Curl Dumbell (Prise Hammer)" && exerciseName != "Chin Ups" && exerciseName != ""
        && exerciseName != "2 Handed Kettlebell Swing" && exerciseName != "Aalex Gambe Alte al Muro" && exerciseName != "Abcd" && exerciseName != "Arnold Shoulder Press" && exerciseName != "Back, Shoulder, And Leg Stretching."
        && exerciseName != "Barbell Bench Press" && exerciseName != "Zercher Cycle" && exerciseName != "Wyciskanie Skos" && exerciseName != "Walking" && exerciseName != "Upper Body"
        && exerciseName != "Triceps Bench Press One Barbell" && exerciseName != "Treee" && exerciseName != "Swim" && exerciseName != "Trazioni Alla Sbarra Presa Inversa" && exerciseName != "Test Pullups" && exerciseName != "Test Ex1"
        && exerciseName != "TestBicep" && exerciseName != "Test" && exerciseName != "Swimming" && exerciseName != "Squat Jumps" && exerciseName != "Snatch" && exerciseName != "Shay"
        && exerciseName != "Seatups" && exerciseName != "Sads" && exerciseName != "Run/Walk" && exerciseName != "Run - Interval Training " && exerciseName != "Rowing, Lying on Bench" && exerciseName != "ExerA"
        && exerciseName != "Chin-ups" && exerciseName != "my Exercise" && exerciseName != "Power Clean" && exerciseName != "Free Weight Lats Pulldown" && exerciseName != "Bike Ride" && exerciseName != "Triceps Machine"
        && exerciseName != "Selectorized Seated Cable Row," && exerciseName != "Shoulder Press, Barbell" && exerciseName != "Perfect Push Up" && exerciseName != "Billexercise" && exerciseName != "" && exerciseName != ""
        && exerciseName != "" && exerciseName != "" && exerciseName != "" && exerciseName != "" && exerciseName != "" && exerciseName != ""
        && exerciseName != "" && exerciseName != "" && exerciseName != "" && exerciseName != "" && exerciseName != "" && exerciseName != ""
        && exerciseName != "" && exerciseName != "" && exerciseName != "" && exerciseName != " " && exerciseName != "" && exerciseName != "";
    }
    function blankNonsense(exerciseDescription) {
      return exerciseDescription != "";
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
      var author = (data[randomNum].author)
      var authorDiv = $("#authors")

      var quoteDiv = $("#quotes")

      quoteDiv.text(quote);
      authorDiv.text("-" + author)

      setInterval(function () {

        var randomNum = Math.floor(Math.random() * 1643)
        var quote = (data[randomNum].text)
        var author = (data[randomNum].author)

        var authorDiv = $("#authors")
        var quoteDiv = $("#quotes")

        quoteDiv.text('"' + quote+ '"');
        authorDiv.text("-" + author);
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
