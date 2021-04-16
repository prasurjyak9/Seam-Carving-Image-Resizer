$(function() {
	$(".div1 > .v1").draggable({
		containment: ".div1",
		axis: "x"
	});

	$(".div1 > .h1").draggable({
		containment: ".div1",
		axis: "y"
	})

	$("#resize-width-button").click(function(){
		var w = $(".v1").css("left");
		$("#img").css("width", w);
	})

	$("#resize-height-button").click(function(){
		var h = $(".h1").css("top");
		$("#img").css("height", h);
	})
});