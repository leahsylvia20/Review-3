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
