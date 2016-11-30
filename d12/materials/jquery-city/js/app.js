// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

// THE LONG WAY

// $("img#first").on("click", function(){
// 	$("#bigimage").attr("src", "img/1.jpg");
// });

// $("img#second").on("click", function(){
// 	$("#bigimage").attr("src", "img/2.jpg");
// });

// $("img#third").on("click", function(){
// 	var src = $("img#third").attr("src");
// 	$("#bigimage").attr("src", src);
// });

// $("img#fourth").on("click", function(){
// 	$("#bigimage").attr("src", "img/4.jpg");
// });

// THE BETTER WAY

$(".thumb").on("click", function() {
	var img = $(this);
	console.log(img.attr("id"));
	$("#bigimage").attr("src", img.attr("src"));
})

