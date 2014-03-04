function updateCountdown() {
	// 140 is the maximum message length
	var remaining = 140 - $('#micropost_content').val().length;

	if(remaining === 1) {
		$('.countdown').text(remaining + ' character remaining.');
	} else if(remaining === -1) {
		$('.countdown').text(remaining*(-1) + ' character over.');
	} else if(remaining < 0 && remaining != -1) {
		$('.countdown').text(remaining*(-1) + ' characters over.');
	} else {
		$('.countdown').text(remaining + ' characters remaining.');
	};
}

$(document).ready(function($) {
	updateCountdown();
	$('#micropost_content').change(updateCountdown);
	$('#micropost_content').keyup(updateCountdown);
	$('#micropost_content').keydown(updateCountdown);
	$('#micropost_content').keypress(updateCountdown);
});