$(".menu").on("click", function() {
  $("nav").toggleClass("open");
});

$(".smallImg").on("mouseover", function() {
	var div = $(this);
  $(".caption").toggleClass("showCaption");
});

$(".smallImg").on("mouseout", function() {
	var div = $(this);
  $(".caption").removeClass("showCaption");
});

$(".thumb").on("click", function() {
	var img = $(this);
	console.log(img.attr("id"));
	$("#bigimage").attr("src", img.attr("src"));
});