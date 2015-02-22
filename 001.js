$.noConflict();
jQuery(document).ready(function(){
	jQuery("button").click(function(){
		jQuery("p").text("jQuery 仍在运行！");
	})
});
