//Biz Logic
var input;
var number = [];

var game = function (input) {
  if (input > 100) {
    alert("Enter a number smaller than 100");
  } else {
    for (index = 0; index<=input; index += 1) {
      number.push(index);
    }
  }
}

var pingpong = function(){
    number.map(function(numbers){
    if (numbers === 0) {
      $("#result").append("<li>" + "Your results:" + "<li>");
    } else if (numbers % 15 === 0) {
      $("#result").append("<li>" + "pingpong" + "</li>");
    } else if (numbers % 5 === 0) {
      $("#result").append("<li>" + "pong" + "</li>");
    } else if (numbers % 3 === 0) {
      $("#result").append("<li>" + "ping" + "</li>");
    } else {
      $("#result").append("<li>" + "numbers" + "</li>");
    }
  }
)};

//UI Logic
$(document).ready(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();
    input = parseInt($("input#number").val());
    $("#result").empty();
    numbers = [];
    game(input);
    pingpong();
    $("#result").show(function() {
    });

    //callback function

});
});
