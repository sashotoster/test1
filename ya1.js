$(function () {
	

    var middleHeight = $('.middle').height(), 
        sidebarContentBottom = $('.sidebar>.test-content').offset().top + $('.sidebar>.test-content').height();
	
	$(window).scroll(function () {
		var scTop = $(window).scrollTop();
		if (scTop > sidebarContentBottom) {
			if (!$('.sidebar').hasClass('faded')) {
				$('.sidebar').insertBefore('.main-content>.test-content').addClass('faded');
				setMinHeight('.main-content', middleHeight);
				
			}		
		} else {
			if ($('.sidebar').hasClass('faded')) {
				$('.sidebar').insertAfter('.main-content').removeClass('faded');			
			}
		}
	});
	
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
	
	function setMinHeight (el, h) {
		$(el).css('min-height', middleHeight);
	}
	
	function setScrollCss (ofw, h) {
		 $('html, body').css({
			overflow: ofw,
			height: h
		});  		
	}
	
	
});