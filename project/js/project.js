$(".menu").on("click", function() {
  $("nav").toggleClass("open");
});

$(".smallImg").hover( function() {
    $(this).find(".caption").fadeIn(300);
}, function() {
    $(this).find(".caption").fadeOut(100);
});

$(".thumb").on("click", function() {
	var img = $(this);
	console.log(img.attr("id"));
	$("#bigimage").attr("src", img.attr("src"));
});
