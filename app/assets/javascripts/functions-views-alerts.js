// Closes alerts after successful micropost

$(function() {
		window.setTimeout(function() { 
		$('.alert-success').fadeTo(500, 0).slideUp(500, function() {
			$(this).remove();
		});
	}, 2500);
});