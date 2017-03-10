$(function () {
    
    const main = $('.main');
    const mainContent = $('.main-content');
    const popup = $('.popup');
    const mcHeight = mainContent.height();    
    const sidebar = $('.sidebar');
    const sidebarContent = $('.sidebar-content'); 
    const scBottom = sidebarContent.offset().top + sidebarContent.height();
	
	$(window).scroll(function () {
		const sTop = $(window).scrollTop();
		if (sTop > scBottom) {
			if (!sidebar.hasClass('sidebar-cut')) {
				sidebar.addClass('sidebar-cut').removeClass('sidebar-default');
                mainContent.removeClass('main-content-default');
				setMinHeight(mainContent, mcHeight);	
			}		
		} else {
			if (sidebar.hasClass('sidebar-cut')) {
				sidebar.removeClass('sidebar-cut').addClass('sidebar-default');		
                mainContent.addClass('main-content-default');
                setMinHeight(mainContent, '');	
			}
		}
	});
	
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
	
	function setMinHeight (el, h) {
		el.css('min-height', h);
	}
	
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