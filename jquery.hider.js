(function( $ ) {
  $.fn.hider = function(options) {
  
    // Set the default options
	myoptions = jQuery.extend({
		wrapper: "wrapper",
		header: "header",
		content: "content",
		time: 200
	}, options);

	//create class strings
	var wrapper = "." + myoptions.wrapper;
	var header = "." + myoptions.header;
	var content = "." + myoptions.content;
	var time = myoptions.time;

	var _header = $(header);
	
	//hide on init	
	_header.next(content).css('display','none');		
	
	//hide and show handling
	_header.click(function() {
	var content_div = $(this).next(content);
	
	if (content_div.css('display') == 'none') {
		  	content_div.slideDown(time);
	} else {
		  	content_div.slideUp(time);
		}
	});
  };
})( jQuery );