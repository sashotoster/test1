$(function () {
    
    var main = $('.main');
    var popup = $('.popup');
	
	
	$('.login').click(function () {
		main.addClass('covered');
		setDisplay(popup, 'inline-block');
		setScrollCss('hidden', '100%');
	});
	$('.cancel').click(function () {
        main.removeClass('covered');
		setDisplay(popup, 'none');
		setScrollCss('auto', 'auto');     
	});
	
	function setScrollCss (ofw, h) {
		 $('html, body').css({
			overflow: ofw,
			height: h
		});  		
	}
    
    function setDisplay (el, d) {
        el.css('display', d);
    }
	
	
});