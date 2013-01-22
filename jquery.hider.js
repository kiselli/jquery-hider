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

	//hide and show handling
	$(header).click(function() {
	var content_div = $(this).next(content);

	if (content_div.css('display') == 'none') {
		  	content_div.slideDown(time);
	} else {
		  	content_div.slideUp(time);
		}
	});
  };
})( jQuery );