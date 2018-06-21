// JavaScript Document

jQuery(document).ready(function(){
	
	// DYNAMIC CONTAINER HEIGHTS
	function resizeContainers() {
		var toolbarHeight = $("#toolbar").outerHeight();
		var windowHeight = $(window).height();
		$("#main-container").css("margin-top",toolbarHeight);
		$("#sidebar").outerHeight( windowHeight - toolbarHeight );
	}
	
	resizeContainers();
	
	$(window).resize(function(){
		resizeContainers();
	});
	
	
	
});