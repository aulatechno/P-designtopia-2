/**
 * --------------------------------------------------------------------------
 * Full screen Overlay Navigation
 * --------------------------------------------------------------------------
 */

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}



/**
 * --------------------------------------------------------------------------
 * Hide Header on on scroll down
 * --------------------------------------------------------------------------
 */

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('nav').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('nav').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('nav').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}



/**
 * --------------------------------------------------------------------------
 * Google Map
 * --------------------------------------------------------------------------
 */

function initialize() {
  var mapOptions = {
    zoom: 16,
    scrollwheel: false,
    center: new google.maps.LatLng(-6.267014, 106.952975)
  };

  var map = new google.maps.Map(document.getElementById('googleMap'),
  mapOptions);

  var marker = new google.maps.Marker({
    position: map.getCenter(),
    animation:google.maps.Animation.BOUNCE,
    //icon: 'media/icon/map-marker.png',
	icon: 'media/map-marker.png',
    map: map
  });
}
google.maps.event.addDomListener(window, 'load', initialize);



/**
 * --------------------------------------------------------------------------
 * ScrollReveal
 * https://github.com/jlmakes/scrollreveal
 * --------------------------------------------------------------------------
 */

window.sr = ScrollReveal();
//sr.reveal('.item');
//window.sr = ScrollReveal({ reset: true });
sr.reveal('.s-reveal, .item', { duration: 1000 });



/**
 * --------------------------------------------------------------------------
 * Nicescroll jQuery Plugin
 * https://github.com/inuyaksa/jquery.nicescroll
 * --------------------------------------------------------------------------
 */

$("html").niceScroll({
  background:	'#ddd',
  cursorborder: "0px solid #000",
  cursorcolor: "#4285F4",
  cursorminheight: 20,
  cursorwidth: "5px",
  hidecursordelay: 400,
  scrollspeed: 60,
  zindex: 999,
  
  bouncescroll: false,
  cursorfixedheight: false,
  enablekeyboard: true,
  horizrailenabled:	true,
  iframeautoresize:	true,
  smoothscroll: true,
  touchbehavior: false
});



/**
 * --------------------------------------------------------------------------
 * Google Analytics
 * --------------------------------------------------------------------------
 */

 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
 (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
 m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
 })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

 ga('create', 'UA-100121879-1', 'auto');
 ga('send', 'pageview');
