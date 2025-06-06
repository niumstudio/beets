$(document).ready(function(){

    // sitewide and activeLinking
    /*
    var str = window.location.pathname;
    if (str.indexOf('/en/') >= 0) {
        $('div.containMNav').load("inc-mobNavEN.html");
        $('div#masthead').load("inc-topNavEN.html");
        $('footer#siteWide').load("inc-footerEN.html");
    } else if (str.indexOf('/de/') >= 0) {
        $('div.containMNav').load("inc-mobNavDE.html");
        $('div#masthead').load("inc-topNavDE.html");
        $('footer#siteWide').load("inc-footerDE.html");
    } else {
        $('div.containMNav').load("/de/inc-mobNavDE.html");
        $('div#masthead').load("/de/inc-topNavDE.html");
        $('footer#siteWide').load("/de/inc-footerDE.html");
    }
    */
  



    $.localScroll({
            target: 'body',
            queue: false,
            hash: false,
            duration: 600,
            easing: 'easeOutQuad'
    });

    // mobile top scroll
    //$('#navMobile').hide();
    
       


    $(".slickSlider").slick({
        autoplay:true,
        autoplaySpeed:5000,
        arrows:false,
        dots:true,
        fade:true,
        speed:2000,
        pauseOnHover:false
    });


    


    // mobile nav
    $('#navClose').hide();
    $('#navClose').click(function(){
        $(this).hide();
        $('#navCart').show();
        $('#navTrigger').show();
        $("div.mblnavContainer").scrollTo(0);
        $('div.mblnav').hide();
        $('html, body').removeClass('noscroll');
        return false;
    });

    $('#navTrigger').click(function(){
        $(this).hide();
        $('#navCart').hide();
        $('#navClose').show();
        $('div.mblnav').show();
        $('html, body').addClass('noscroll');
        return false;

    });

    $('.mblnav a.inpage').click(function(){
        $('#navClose').hide();
        $('#navCart').show();
        $('#navTrigger').show();
        $("div.mblnavContainer").scrollTo(0);
        $('div.mblnav').hide();
        $('html, body').removeClass('noscroll');
        return false;
    });


    // slideNav
    $('#omniDrop').click(function(){
        //$(this).hide();
        $(this).siblings('a').toggleClass('faded');
        $(this).find('i').toggleClass('rotateIC');
        $('#slideNav').slideToggle();
        return false;

    });




    // show random div
    var elems = $(".randomShow");
    if (elems.length) {
    var keep = Math.floor(Math.random() * elems.length);
    for (var i = 0; i < elems.length; ++i) {
        if (i !== keep) {
        $(elems[i]).hide();
        }
    }
    }



    // named anchor scrollTo and offset
    var anchorLink = $(window.location.hash);
    if ( anchorLink.length ) {
        $("html, body").animate({scrollTop: anchorLink.offset().top - 50 }, 500);
    }




    // onOff waypoints content area
    $('.onOff').each(function() {
        var inview = new Waypoint.Inview({
        element: this,
        enter: function(direction) {
            // alert('Enter triggered with direction ' + direction)
            },
            entered: function(direction) {     
                $(this[0,'element']).find('.onOffTarget').removeClass('stateInactive');                            
                $(this[0,'element']).find('.onOffTarget').addClass('stateActive');
                    
            },
            exit: function(direction) {
                $(this[0,'element']).find('.onOffTarget').removeClass('stateActive');                            
                $(this[0,'element']).find('.onOffTarget').addClass('stateInactive');
            },
            exited: function(direction) {
                // alert('Exited triggered with direction ' + direction)
            }
        })
    });





    var dwidth = jQuery(window).width();
    jQuery(window).bind('resize', function(e){
    
        var wwidth = jQuery(window).width();
    
        if(dwidth!==wwidth){
         dwidth = jQuery(window).width();
    
        if (window.RT) clearTimeout(window.RT);
        window.RT = setTimeout(function(){
            this.location.reload(false); /* false to get page from cache */
        }, 1000);
    }
    });





    //$('.downloadsContent').hide();

    $('.closeContent').click(function(){
        $('.downloadsContent').fadeTo(250,0).delay(250).hide();  
        $('.navTrigger a').removeClass('activeLink');
        return false;
    });

    $('.navTrigger a:not(".extLink")').click(function(){
        $('.downloadsContent').hide();      
        $('.navTrigger a').removeClass('activeLink');
        $(this).addClass('activeLink');
        return false;
    });


    $('.navTrigger a#t1').click(function(){
        $('#panel1').fadeTo(250,1);
        return false;
    });
    $('.navTrigger a#t2').click(function(){
        $('#panel2').fadeTo(250,1);
        return false;
    });
    $('.navTrigger a#t3').click(function(){
        $('#panel3').fadeTo(350,1);
        return false;
    });
    $('.navTrigger a#t4').click(function(){
        $('#panel4').fadeTo(250,1);
        return false;
    });
    $('.navTrigger a#t5').click(function(){
        $('#panel5').fadeTo(250,1);
        return false;
    });
    $('.navTrigger a#t6').click(function(){
        $('#panel6').fadeTo(250,1);
        return false;
    });

    
});

