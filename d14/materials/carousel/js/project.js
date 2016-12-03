
// when the right button is clicked, show the next image as selected

$("#right").on("click", function() {
	console.log("right button clicked!")
	var img = $()
	$(".selected").attr("src", img.attr("src"));
});

// when the left button is clicked, show the previous image as selected

$("#left").on("click", function() {
	console.log("left button clicked!")
});

