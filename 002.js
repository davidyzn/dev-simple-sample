$(document).ready(function(){
	$(".ex .hide").click(function(){
		$(this).parents(".ex").hide("slow");
	});
	$(".ex .show").click(function(){
		$(this).parents(".ex").show("slow");
	});
});