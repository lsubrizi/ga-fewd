$("button").on("click", function() {
	var button = $(this);
  	button.siblings("menu").toggleClass("open");
});

$("button").on("blur", function() {
	var selected = $(this);
	selected.siblings("menu").removeClass("open");
});