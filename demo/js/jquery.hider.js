(function( $ ) {
  $.fn.hider = function(options) {
  
    // Do your awesome plugin stuff here
	myoptions = jQuery.extend({
		wrapper: "wrapper",
		header: "header",
		content: "content",
		time: "200"
	}, options);

	//create class strings
	var wrapper = "." + myoptions.wrapper;
	var header = "." + myoptions.header;
	var content = "." + myoptions.content;

	//hide and show handling
	$(header).click(function() {
	var content_div = $(this).next(content);

	if (content_div.css('display') == 'none') {
		  	content_div.slideDown(200);
	} else {
		  	content_div.slideUp(200);
		}
	});
  };
})( jQuery );