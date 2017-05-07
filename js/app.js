$(document).ready(function() {

	$(window).load(function() {
	  $('.Flexslider').flexslider({
	    animation: 'slide'
	  });
	});

	$(window).load(function() {
	  $('.flexslider').flexslider({
	    animation: 'slide',
	    controNav: false,
	    prevText: '',
	    nextText: '',
	    slideshowSpeed: 8000
	  });
	});

	$(document).scroll(function() {
	  var y = $(this).scrollTop();
	  // faq back to top arrow
	  if (y > 1700) {
	    $('.BackToTop').css('opacity', '1');
	  } else {
	    $('.BackToTop').css('opacity', '0');
	  }

	  var windowHeight = $(window).height();
	  if (y > windowHeight) {
	  	$('.MobileStickyHeaderContainer').show();
	  } else {
	  	$('.MobileStickyHeaderContainer').hide();
	  }
	});

	var standalone = window.navigator.standalone,
	   userAgent = window.navigator.userAgent.toLowerCase(),
	   safari = /safari/.test( userAgent ),
	   ios = /iphone|ipod|ipad/.test( userAgent );

	if (ios) {
	   if ( !standalone && safari ) {
	       //browser
	   } else if ( standalone && !safari ) {
	       //standalone
	       $('#googlePlayLogoFooter').remove();
	       $('#googlePlayLogoHeader').remove();
	       $('#googlePlayLogoMobileSticky').remove();
	   } else if ( !standalone && !safari ) {
	       //uiwebview
	       $('#googlePlayLogoFooter').remove();
	       $('#googlePlayLogoHeader').remove();
	       $('#googlePlayLogoMobileSticky').remove();
	   };
	} else {
	   //not iOS
	};
});