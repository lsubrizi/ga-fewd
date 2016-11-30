$("button#click-me").on("click", function(){
	var deathAge = $("input#max-age").val();
	var currentAge = $("input#age").val();
	var faveDrink = $("select#item").val();
	var dailyCups = $("input#num-per-day").val();
	var daysLeft = (deathAge - currentAge) * 365;
	var lifetimeSupply = (daysLeft * dailyCups);
	$("#solution").text(lifetimeSupply.toLocaleString());
	$("#drink").text(faveDrink);
});