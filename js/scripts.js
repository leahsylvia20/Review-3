//Biz Logic
var input;
var number = [];

var game = function(input) {
  if (input >100) {
    alert("Enter a number smaller than 100");
  } else {
    for (index = 0; index<=input; index += 1) {
        number.push(index);
      $(".results").show(index);
    }
  }
}

var pingpong = function(){
  number.map(function(numbers){
    $("#result").append("<li>" + "Your results:" + "<li>");
  } else if (number % 15 === 0) {
    $("#result").append("<li>" + "pingpong" + "</li>");
  } else if (number % 5 === 0) {
    $("#result").append("<li>" + "pong" + "</li>");
  } else if (number % 3 === 0) {
    $("#result").append("<li>" + "ping" + "</li>");
  } else {
    $("#result").append("<li>" + "numbers" + "</li>");
  }
}

//Ui logic
$(document).ready(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();
    debugger;
    input = parseInt($("input#number").val());
    $"#result").empty();
    number = [];
    game(input);
    pingpong(input);
    $('#result').click(function() {
      location.reload();
    }

    //callback function

  });
});
