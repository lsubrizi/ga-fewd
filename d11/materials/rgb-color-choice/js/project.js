
// $("a#color-button").on("click", function() {
// 	var r = $("input#red").val();
// 	var g = $("input#green").val();
// 	var b = $("input#blue").val();
// 	$("#wrapper").css("background-color", "rgb(" + r +", " + g +", " + b +")");
// 	$("p#colorful-text").text("rgb(" + r +", " + g +", " + b +")");
// });

$("#color-button").on("click", function() {
	var r = Math.round(Math.random() * 256);
	var g = Math.round(Math.random() * 256);
	var b = Math.round(Math.random() * 256);
	$("#wrapper").css("background-color", "rgb(" + r +", " + g +", " + b +")");
	$("#colorful-text").text("rgb(" + r +", " + g +", " + b +")");
});