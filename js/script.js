(function($, undefined){
    $(function(){

		$('.slick-reviews').slick({
	      dots: false,
	      arrows: true,
		  infinite: true,
		  fade: false,
		  slidesToShow: 2,
		  slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 15000,
          nextArrow: '<button class="da-next" aria-hidden="true"><img src="images/reviews__icon_left.png"></button>',
          prevArrow: '<button class="da-prev" aria-hidden="true"><img src="images/reviews__icon_right.png"></button>',
		});

		// anchors
		$("#daMenu a").on("click", function(event) {

        event.preventDefault();

        var currentBlock = $(this).attr("href"),
            currentBlockOffset = $(currentBlock).offset().top;

        $("html, body").animate({
            scrollTop: currentBlockOffset - 0
        }, 500);

});

    });
})(jQuery);
