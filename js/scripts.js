// JavaScript Document

jQuery(document).ready(function(){
	
	// LOAD TAB CONTENT
	$("#tab-content").load("tab-scores-content.html", function(){
		$(".tab-info:first").slideDown("fast");
		
		// TAB FUNCTIONALITY
		$(".tab-header").click(function(){
			$(this).next(".tab-info").slideToggle("fast");
		});
		
		$(".expand-all-tabs").click(function(){
			$(".tab-info").slideDown("fast");
		});
		
		$(".collapse-all-tabs").click(function(){
			$(".tab-info").slideUp("fast");
		});
	});
	
	
	
	// DYNAMIC CONTAINER WIDTHS & HEIGHTS
	function resizeContainers() {
		var toolbarHeight = $("#toolbar").outerHeight();
		var windowHeight = $(window).height();
		var sidebarWidth = $("#sidebar").outerWidth();
		$("#main-container").css("margin-top",toolbarHeight);
		$("#main-content").css("margin-left",sidebarWidth - 10);
		$("#sidebar").outerHeight( windowHeight - toolbarHeight );
	}
	
	resizeContainers();
	
	$(window).resize(function(){
		resizeContainers();
	});
	
	
	
});