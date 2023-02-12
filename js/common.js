// Common
$(window).on('load',function(){
	//#バーガーアイコンメニュー
	$("#header-toggle").click(function(){
		$(this).toggleClass("act");
		$("#header-nav").fadeToggle(200);
		$("#header-bg").fadeToggle(200);
        // スクロール禁止
        var moveFun = function(event) {
            event.preventDefault();
        }
        if($(".act").length) { 
            window.addEventListener('wheel', moveFun, { passive: false });
        } else {
            window.removeEventListener('wheel', moveFun, { passive: false });
        }
        if($(".act").length) { 
            window.addEventListener('touchmove', moveFun, { passive: false })
          } else {
            window.removeEventListener('touchmove', moveFun, { passive: false });
          }
        if($(".act").length) { 
            $("body").css('overflow','hidden');
        } else {
            $("body").css('overflow','auto');
        }
	});
});

// Use [top]
if($('body#top').length){
    $(".bg-slide").bxSlider({
        mode:'fade',
        speed: 800,
        pause:  5000,
        auto: true,
        pager: true,
        controls: false,
        easing: 'swing',
        pagerCustom: '.bx-pager'
    });
};