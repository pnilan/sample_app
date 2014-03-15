// Character Countdown

function updateCountdown() {
	// 140 is the maximum message length
	var max = 140
	var remaining = max - $('#micropost_content').val().length;

	if(remaining === 1) {
		$('.countdown').text('1 character remaining.');
		// countdownAttributes(s);
	} else if(remaining === -1) {
		$('.countdown').text('1 character over.');
		// countdownAttributes();
	} else if(remaining < -1) {
		$('.countdown').text(remaining*(-1) + ' characters over.');
		// countdownAttributes();
	} else {
		$('.countdown').text(remaining + ' characters remaining.');
		// countdownAttributes();
	};
}

$(document).ready(function($) {
	updateCountdown();
	$('#micropost_content').change(updateCountdown);
	$('#micropost_content').keyup(updateCountdown);
	$('#micropost_content').keydown(updateCountdown);
	$('#micropost_content').keypress(updateCountdown);
});

function countdownAttributes() {
	var max = 140
	var remaining = max - $('#micropost_content').val().length;

	if(remaining <= 20 && remaining > 0) {
		// font color = yellow
		// $('.countdown').css('color', 'yellow');
	} else if(remaining <= 0) {
		// font color = red
		// $('.countdown').css('color', 'red');
	} else {
		// font color = $grayLight
		// $('.countdown').css('color', '$grayLight');
	};
}