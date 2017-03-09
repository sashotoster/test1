$(function () {
	
	$('.login').click(function () {
		$('.main').addClass('covered');
		$('.popup').css('display', 'inline-block');
		setScrollCss('hidden', '100%');
	});
	$('.cancel').click(function () {
		$('.main').removeClass('covered');
		$('.popup').css('display', 'none');
		setScrollCss('auto', 'auto');     
	});		
	
	function setScrollCss (ofw, h) {
		 $('html, body').css({
			overflow: ofw,
			height: h
		});  		
	}
	
	
});