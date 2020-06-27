$(document).ready(function () {
  


var exercise = {
  pic: "",
  exercise: [],
  description: ""

}

counter = 0

var select = ""; 
console.log(select)

$('#selector').change(function(e) {
  e.preventDefault()
  select = $(this).val()
  console.log(select)
  firstCall(select)
  });

  
  function firstCall(id){
  var queryURL = "https://wger.de/api/v2/exercise/?muscles=" + id + "&" + "007b3444879798f58c703a831e696dc56e7d9bda" + "&language=2";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function (response) {
  console.log(response);
  console.log(response.results[1].description)
  counter++

});
  }



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






