//Biz Logic
var input;
var number = [];

var pingpong = function(input) {
  if (input >100) {
    alert("Please enter a number smaller than 100");
  } else {
    for (index = 0; index<=input; index += 1) {
        number.push(index);
      $(".results").show(index);
    }
  }
}


//Ui logic
$(document).ready(function() {
  $("#numbers").submit(function(event) {
    event.preventDefault();
    //debugger;
    var countTo = parseInt($("#number1").val());
    var countBy = parseInt($("#number2").val());

    var countingNumber = Math.floor(countTo/countBy);

    //callback function
    bizLogic(countingNumber, countBy);

  });
});
