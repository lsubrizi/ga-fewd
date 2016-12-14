$("button").on("click", function() {
	var movie = $("input").val()
	$.getJSON("http://www.omdbapi.com/?t=" + movie, function(omdbData) {
		$("h1.title").text(omdbData["Title"]);
		$("h4.year").text(omdbData["Year"]);
		$("img.poster").attr("src", omdbData["Poster"]);
		$("p.plot").text(omdbData["Plot"]);
	var liThatIMade = $("<li>"+(omdbData["Title"])+"</li>");
		$("ul").append(liThatIMade);
	})
});

// $("ul").on("click"), function(event) {
// 	var selected = $(event.target);
// 	console.log(selected.text());
// };


// ## Bonus

// Every time you search for a movie, add that movie title as a <li> under the `ul.searches` element.

// HINT:

// ```javascript
// // to create an element
// var liThatIMade = $("<li>Peanut Butter</li>");

// // to add it to the page
// $("ul").append(liThatIMade);

// ## Bonus 2

// When you click on a past movie search it shows up as if the user had typed it!

// HINT

// You cannot use $("li").on("click") because the `li`s are not on the page yet. You have to listen to its parent:

// ```javascript
// $("ul").on("click", function(event) {
//   // $(event.target) is the li that was clicked
//   // Whereas $(this) is the ul
// });