var slider=$("#loop-slider"),imgGroup=$("#img-group"),img=$("#img-group li"),imgCount=img.length,firstImg=img.first(),lastImg=img.last();slider.data("autoplay")?autoplay=slider.data("autoplay"):autoplay=!1,slider.data("speed")?gallerySpeed=slider.data("speed"):gallerySpeed=8e3,imgGroup.css("width",100*(imgCount+2)+"vw");var controlsHTML='<div class="control-container"><div class="controls prev"></i></div><div class="controls next"></div></div>',controls=document.createElement("div");controls.innerHTML=controlsHTML,document.getElementById("loop-slider").appendChild(controls),firstImg.clone().addClass("clone").appendTo(imgGroup),lastImg.clone().addClass("clone").prependTo(imgGroup),(img=$("#img-group li")).each(function(){var i=$(this),t=i.data("img");i.css("background-image","url("+t+")")});var position=-100,slidew=100,duration=.3,delay=1e3*duration+1,endPosition=-100*imgCount;function nextSlide(){position-=slidew,imgGroup.css({transform:"translateX("+position+"vw)","transition-duration":+duration+"s"})}function prevSlide(){position+=slidew,imgGroup.css({transform:"translateX("+position+"vw)","transition-duration":+duration+"s"})}function rotateSlide(){setTimeout(function(){imgGroup.css({"transition-duration":"0s",transform:"translateX("+position+"vw)"})},delay)}function rotate(){position==endPosition?(nextSlide(),position=-100,rotateSlide()):nextSlide()}if($(".next").click(function(){position>endPosition+1?nextSlide():(nextSlide(),position=-100,rotateSlide())}),$(".prev").click(function(){position<-101?prevSlide():(prevSlide(),position=endPosition,rotateSlide())}),$(document).keydown(function(i){switch(i.which){case 39:position>endPosition+1?nextSlide():(nextSlide(),position=-100,rotateSlide());break;case 37:position<-101?prevSlide():(prevSlide(),position=endPosition,rotateSlide());break;default:return}i.preventDefault()}),"1"==autoplay){var speed=gallerySpeed,timer=setInterval(rotate,speed);slider.hover(function(){clearInterval(timer)},function(){timer=setInterval(rotate,speed)}),slider.keypress(function(){clearInterval(timer)},function(){timer=setInterval(rotate,speed)})}


/*==========================products slider js=============================*/
/*$(document).ready(function(){

$('#itemslider').carousel({ interval: 3000 });

$('.carousel-showmanymoveone .item').each(function(){
var itemToClone = $(this);

for (var i=1;i<6;i++) {
itemToClone = itemToClone.next();

if (!itemToClone.length) {
itemToClone = $(this).siblings(':first');
}

itemToClone.children(':first-child').clone()
.addClass("cloneditem-"+(i))
.appendTo($(this));
}
});
});*/

/*==========================counter js=============================*/


$.fn.jQuerySimpleCounter = function( options ) {
	    var settings = $.extend({
	        start:  0,
	        end:    100,
	        easing: 'swing',
	        duration: 400,
	        complete: ''
	    }, options );

	    var thisElement = $(this);

	    $({count: settings.start}).animate({count: settings.end}, {
			duration: settings.duration,
			easing: settings.easing,
			step: function() {
				var mathCount = Math.ceil(this.count);
				thisElement.text(mathCount);
			},
			complete: settings.complete
		});
	};


$('#number1').jQuerySimpleCounter({end: 20,duration: 5000});
$('#number2').jQuerySimpleCounter({end: 100,duration: 5000});
$('#number3').jQuerySimpleCounter({end: 1000,duration: 5000});
$('#number4').jQuerySimpleCounter({end: 100,duration: 5000});


/*----------------------------------------------------------------------------------------------------*/
(function($){
    $(window).on("load",function(){
        $(document).scrollzipInit();
        $(document).rollerInit();
    });
    $(window).on("load scroll resize", function(){
        $('.numscroller').scrollzip({
            showFunction    :   function() {
                                    numberRoller($(this).attr('data-slno'));
                                },
            wholeVisible    :     false,
        });
    });
    $.fn.scrollzipInit=function(){
        $('body').prepend("<div style='position:fixed;top:0px;left:0px;width:0;height:0;' id='scrollzipPoint'></div>" );
    };
    $.fn.rollerInit=function(){
        var i=0;
        $('.numscroller').each(function() {
            i++;
           $(this).attr('data-slno',i); 
           $(this).addClass("roller-title-number-"+i);
        });        
    };
    $.fn.scrollzip = function(options){
        var settings = $.extend({
            showFunction    : null,
            hideFunction    : null,
            showShift       : 0,
            wholeVisible    : false,
            hideShift       : 0,
        }, options);
        return this.each(function(i,obj){
            $(this).addClass('scrollzip');
            if ( $.isFunction( settings.showFunction ) ){
                if(
                    !$(this).hasClass('isShown')&&
                    ($(window).outerHeight()+$('#scrollzipPoint').offset().top-settings.showShift)>($(this).offset().top+((settings.wholeVisible)?$(this).outerHeight():0))&&
                    ($('#scrollzipPoint').offset().top+((settings.wholeVisible)?$(this).outerHeight():0))<($(this).outerHeight()+$(this).offset().top-settings.showShift)
                ){
                    $(this).addClass('isShown');
                    settings.showFunction.call( this );
                }
            }
            if ( $.isFunction( settings.hideFunction ) ){
                if(
                    $(this).hasClass('isShown')&&
                    (($(window).outerHeight()+$('#scrollzipPoint').offset().top-settings.hideShift)<($(this).offset().top+((settings.wholeVisible)?$(this).outerHeight():0))||
                    ($('#scrollzipPoint').offset().top+((settings.wholeVisible)?$(this).outerHeight():0))>($(this).outerHeight()+$(this).offset().top-settings.hideShift))
                ){
                    $(this).removeClass('isShown');
                    settings.hideFunction.call( this );
                }
            }
            return this;
        });
    };
    function numberRoller(slno){
            var min=$('.roller-title-number-'+slno).attr('data-min');
            var max=$('.roller-title-number-'+slno).attr('data-max');
            var timediff=$('.roller-title-number-'+slno).attr('data-delay');
            var increment=$('.roller-title-number-'+slno).attr('data-increment');
            var numdiff=max-min;
            var timeout=(timediff*3000)/numdiff;
            //if(numinc<10){
                //increment=Math.floor((timediff*1000)/10);
            //}//alert(increment);
            numberRoll(slno,min,max,increment,timeout);
            
    }
    function numberRoll(slno,min,max,increment,timeout){//alert(slno+"="+min+"="+max+"="+increment+"="+timeout);
        if(min<=max){
            $('.roller-title-number-'+slno).html(min);
            min=parseInt(min)+parseInt(increment);
            setTimeout(function(){numberRoll(eval(slno),eval(min),eval(max),eval(increment),eval(timeout))},timeout);
        }else{
            $('.roller-title-number-'+slno).html(max);
        }
    }
})(jQuery);




/*testimonials js*/
// $(document).ready(function(){
//     $("#testimonial-slider").owlCarousel({
//         items:1,
//         itemsDesktop:[1000,2],
//         itemsDesktopSmall:[979,2],
//         itemsTablet:[768,2],
//         itemsMobile:[550,1],
//         pagination: true,
//         autoPlay:true,
//         autoplayTimeout: 7000,
//   smartSpeed: 800,
//         nav:true,
//         loop: true
//     });
// });



jQuery("#testimonial-slider").owlCarousel({
  autoplay: true,
//   rewind: true, /* use rewind if you don't want loop */
  margin: 20,
   /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 4000,
  smartSpeed: 400,
  nav: true,
  loop:true,
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 1
    },

    1024: {
      items: 1
    },

    1366: {
      items: 1
    }
  }
});











/*scroll js*/

// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});


/*fixed js*/
$(window).scroll(function() {
  var sticky = $('.main-nav'),
    scroll = $(window).scrollTop();

  if (scroll >= 40) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});