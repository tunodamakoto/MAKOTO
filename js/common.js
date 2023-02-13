// Common
$(window).on('load',function(){
	//#バーガーアイコンメニュー
	$("#header-toggle").click(function(){
		$(this).toggleClass("act");
		$("#header-nav").fadeToggle(200);
		$("#header-bg").fadeToggle(200);
        // スクロール禁止
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

// Use [about]
if($('body#about').length){
    $(window).on('scroll', function() {
        var chart = $('.chart');
        chart.each(function() {
            var chartOffset = $(this).offset().top;
            var scrollPos = $(window).scrollTop();
            var wh = $(window).height();
            if(scrollPos > chartOffset - wh + (wh / 2)){
                if (window.matchMedia('(min-width: 769px)').matches) {
                    $('.chart').easyPieChart({
                        easing: 'easeOutQuart',
                        barColor: '#666666',
                        trackColor: '#CDCDCD',
                        animate: 5000,
                        lineWidth: 8,
                        size: 160,
                        trackWidth: 6,
                        scaleLength: 10,
                        scaleColor: false,
                    });
                } else if (window.matchMedia('(max-width: 768px) and (min-width: 521px)').matches) {
                    $('.chart').easyPieChart({
                        easing: 'easeOutQuart',
                        barColor: '#666666',
                        trackColor: '#CDCDCD',
                        animate: 5000,
                        lineWidth: 8,
                        size: 130,
                        trackWidth: 6,
                        scaleLength: 10,
                        scaleColor: false,
                    });
                } else if (window.matchMedia('(max-width:520px)').matches) {
                    $('.chart').easyPieChart({
                        easing: 'easeOutQuart',
                        barColor: '#666666',
                        trackColor: '#CDCDCD',
                        animate: 5000,
                        lineWidth: 8,
                        size: 110,
                        trackWidth: 6,
                        scaleLength: 10,
                        scaleColor: false,
                    });
                }
            }
        });
    });
};