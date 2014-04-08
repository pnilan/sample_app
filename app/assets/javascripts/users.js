 $(function() {
 	$('a.load-more-users').on('inview', function(event, visible) {
 		if (visible) {
 			$.getScript($(this).attr("href"));
 		};
 	});
 })