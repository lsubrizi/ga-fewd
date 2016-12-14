var trip = [
  {
    city: "London",
    country: "UK",
    photo: "http://s3.evcdn.com/images/block/I0-001/024/126/410-9.jpeg_/waset-london-2017-conference-10.jpeg"
  },
  {
    city: "Budapest",
    country: "Hungary",
    photo: "http://s4.evcdn.com/images/block/I0-001/034/301/859-2.jpeg_/waset-budapest-2017-conference-59.jpeg"
  },
  {
    city: "Lisbon",
    country: "Portugal",
    photo: "http://s2.evcdn.com/images/block/I0-001/033/766/357-7.jpeg_/waset-lisbon-2017-conference-57.jpeg"
  }
];

// The redundant way

// $("button#first").on("click", function() {
//   $("img").attr("src", trip[0]["photo"])
//   $("h1").text(trip[0]["city"]+", "+ trip[0]["country"])
// });

// $("button#second").on("click", function() {
//   $("img").attr("src", trip[1]["photo"])
//   $("h1").text(trip[1]["city"]+", "+ trip[1]["country"])
// });

// $("button#third").on("click", function() {
//   $("img").attr("src", trip[2]["photo"])
//   $("h1").text(trip[2]["city"]+", "+ trip[2]["country"])
// });

// The better way

var changeStop = function(number) {
  var city = trip[number]["city"];
  var country = trip[number]["country"];
  $("h1").text(city +", "+ country);
  $("img").attr("src", trip[number]["photo"]);
}

$("button#first").on("click", function() {
  changeStop(0);
});

$("button#second").on("click", function() {
  changeStop(1);
});

$("button#third").on("click", function() {
  changeStop(2);
});
