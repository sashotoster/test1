$(function () {
	

    var middleHeight = $('.middle').height(), 
        sidebarContentBottom = $('.sidebar>.test-content').offset().top + $('.sidebar>.test-content').height();
	
	$(window).scroll(function () {
		var scTop = $(window).scrollTop();
		if (scTop > sidebarContentBottom) {
			if (!$('.sidebar').hasClass('faded')) {
				$('.sidebar').addClass('faded');
				//$('.sidebar').fadeOut();
				setMinHeight('.main-content', middleHeight);
			}		
		} else {
			if ($('.sidebar').hasClass('faded')) {
				$('.sidebar').removeClass('faded');
				//$('.sidebar').fadeIn();				
			}
		}
	});
	
	$('.login').click(function () {
		$('.main').addClass('covered');
		$('.popup').css('display', 'inline-block');
        $('html, body').css({
            overflow: 'hidden',
            height: '100%'
        });
		//disableScroll();
	});
	$('.cancel').click(function () {
		$('.main').removeClass('covered');
		$('.popup').css('display', 'none');
             $('html, body').css({
                overflow: 'auto',
                height: 'auto'
            });       
		//enableScroll();
	});	
	
	function setMinHeight (el, h) {
		$(el).css('min-height', middleHeight);
	}
	
	
});