$(document).ready(function () {



  var exercise = {
    pic: "",
    exercise: [],
    description: ""

  }

  counter = 0

  var select = "";
  console.log(select)

  $('#selector').change(function (e) {
    e.preventDefault()
    select = $(this).val()
    $("#display").empty();
    firstCall(select)
    
  });

  // startButton.addEventListener("click", startGame);
  // //  submitButton.addEventListener("click");
  // nextButton.addEventListener("click", () => {
  //     if (currentQuestionIndex === 5) {
  //         submitButton.classList.remove("hide")
  //         nextButton.classList.add("hide")
  //     } else {
  //         nextQuestion();
  //         currentQuestionIndex++;
  //     }
  // Gathering the Name of the exercise and description of muscle 
  function firstCall(id) {
    $(("#card")).removeClass("hide");
    var queryURL = "https://wger.de/api/v2/exercise/?muscles=" + id + "&" + "007b3444879798f58c703a831e696dc56e7d9bda" + "&language=2";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      console.log(response.results[8].description)

    //creating setting the responses to variables

      var exerciseName = $("#exerciseName");
      var exerciseDescription = $("#exerciseDescription");

      exerciseName.html(response.results[8].name);
      exerciseDescription.html(response.results[8].description)      


      counter++
      // secondCall()

    });
  }

  
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




});






