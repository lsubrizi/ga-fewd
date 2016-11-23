// console.log("Hi Lisa");

// var userTitle = prompt("What do you want the title of this page to be?");

// $("h1").text(userTitle);

$("button").on("click", function() {
  var title = $("input").val();
  $("h1").text(title);
  $("h1").css("background-color", "yellow");
});

$("p").css("color", "red");
