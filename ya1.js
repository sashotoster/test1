$(function () {

    var middleHeight = $('.middle').height(), 
        sidebarContentBottom = $('.sidebar-content').offset().top + $('.sidebar-content').height();
	
	$(window).scroll(function () {
		var scTop = $(window).scrollTop();
		if (scTop > sidebarContentBottom) {
			if (!$('.sidebar').hasClass('faded')) {
				$('.sidebar').addClass('faded').removeClass('sidebar-default');
                $('.main-content').removeClass('main-content-default');
				setMinHeight('.main-content', middleHeight);	
			}		
		} else {
			if ($('.sidebar').hasClass('faded')) {
				$('.sidebar').removeClass('faded').addClass('sidebar-default');		
                $('.main-content').addClass('main-content-default');
                setMinHeight('.main-content', '');	
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
		$(el).css('min-height', h);
	}
	
	function setScrollCss (ofw, h) {
		 $('html, body').css({
			overflow: ofw,
			height: h
		});  		
	}
	
	
});