$(function(){

    

//    
//  $(function(){
//      $('#header').hover(function(){
//          if(!$('#header').mouseover().stop().css({
//              "backgroundColor":"rgba(255,255,255,1)";
//          })
//      });
//  })  
//    
//    
    
    
    
var header = 0;
$(window).scroll(function(){
    if($(document).scrollTop() > 0) {
		if(header == 0) {
           header = 1;
			$('#header').stop().css({
                backgroundColor: "rgba(255,255,255,0.9)",
                boxShadow: "1px 1px 10px rgba(0,0,0,0.5)",
                transition: "all 0.5s"
               });
            $('.gnb>ul>li>a, #header .top_menu a, .top_menu .login>li>select').css('color','#6c6c6c');
            $('.top_menu .jeju>li:after, .top_menu .login>li:before').css('background-color','#6c6c6c');
            $('.logo a img').attr('src','images/logo_blue.png');
            $('.search a img').attr('src','images/search2.png');
            $('.menu a img').attr('src','images/menu2.png');
            $('.gnb').mouseover(function(){
                $('#header').css('background-color','rgba(255,255,255,0.9)');
            });
            $('.gnb>ul>li>a').mouseout(function(){
                $('#header').css('background-color','rgba(255,255,255,0.9)');
                $('#header').css('color','rgba(0,0,0,1)');
            });
            $('.gnb .sub_menu>li>a:hover').mouseover(function(){                
                $('.gnb>ul>li>a').css('color','#6c6c6c');
            });
           $('.gnb .sub_menu').mouseover(function(){                
                $('.gnb>ul>li>a').css('color','#6c6c6c');
               $('.logo a img').attr('src','images/logo_blue.png');
               $('.top_menu .jeju>li>a').css('color','#6c6c6c');
               $('#header:hover .top_menu a').css('color','#6c6c6c');
               $('.search a img').attr('src','images/search2.png');
                $('.menu a img').attr('src','images/menu2.png');
               $('#header:hover .top_menu .jeju>li:after').css('background-color','#6c6c6c');
            });
            
        }
		
        
        
    } else {
        
		if(header == 1) {
           header = 0;
            
            $('#header').stop().css({
                backgroundColor: "transparent",
                boxShadow: "none",
                transition: "all 0.5s"
               });
            $('.gnb>ul>li>a, #header .top_menu a, .top_menu .login>li>select').css('color','#ffffff');
            $('.jeju>li:after').css('background-color','#ffffff');
            $('.logo a img').attr('src','images/logo.png');
            $('.search a img').attr('src','images/search.png');
            $('.menu a img').attr('src','images/menu.png');
            
        }  
    }
});
    
//    
//$('#header').on('mouseover',function(){
//    $(this).css('background-color','rgba(255,255,255,1)');
//        $('.gnb>ul>li>a, .top_menu a, .top_menu select, top_menu .login>li:after').css('color','#6c6c6c');
//        $('.top_menu .jeju>li:after, .top_menu .login>li:before').css('backgorund-color','#6c6c6c');
//        $('.logo a img').attr('src','images/logo_blue.png');
//        $('.search a img').attr('src','images/search2.png');
//        $('.menu a img').attr('src','images/menu2.png');
//    
//})
//    .on('mouseout',function(){
//    $(this).css('background-color','transparent');
//        $('.gnb>ul>li>a, .top_menu a, .top_menu select, top_menu .login>li:after').css('color','#ffffff');
//        $('.top_menu .jeju>li:after, .top_menu .login>li:before').css('background-color','#ffffff');
//        $('.logo a img').attr('src','images/logo.png');
//        $('.search a img').attr('src','images/search.png');
//        $('.menu a img').attr('src','images/menu.png');
//    
//});
    
    
    
    
/*반응형시 이미지교체*/
$(window).resize(function(){
    
    var width_size = window.outerWidth;
    
    if (width_size <= 1279){
        $('.search a img').attr('src','images/search2.png')
        $('.menu a img').attr('src','images/menu2.png')
        $('.logo a img').attr('src','images/logo_blue.png');
    }
    if (width_size >= 1280){
        $('.search a img').attr('src','images/search.png')
        $('.menu a img').attr('src','images/menu.png')
        $('.logo a img').attr('src','images/logo.png');
    }
    
});
/*반응형시 이미지교체*/    



    
/*모바일메뉴*/
$('.search_menu .menu a').click(function(){
    $('#menu_mobile').addClass('on');
    $('.menu_mobilein').animate({
            marginRight : '0px'
        },200);
});
$('#menu_mobile .closebtn>a').click(function(){
    $('#menu_mobile').removeClass('on');
    $('.menu_mobilein').animate({
        marginRight : '-100%'
    },200);
});    
    
$('.m_list>li').click(function(){
    $(this).addClass('on');
    $(this).siblings().removeClass('on');
    $(this).siblings().find('.m_list_sub').removeClass('on');
    $(this).find('.m_list_sub').addClass('on');
});    
/*모바일메뉴*/    
    

    
    
    
/*이미지 슬라이드*/    
 $(window).load(function() {
            $('.flexslider').flexslider({
                animation: "slide"
            });
 });
/*이미지 슬라이드*/    

  
    
    
    
    
    
    
    
/*우측 스크롤바*/    
/*버튼 클릭시 해당 섹션으로 이동*/    
$('#section_nav a').on('click', function() {

    var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 28;

    $('#main').animate({
        scrollTop: scrollPoint
    }, 500);

    return false;

})

/*스크롤표시*/
$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
        $('#section_nav').addClass('fixed');
        $('section').each(function(i) {
            if ($(this).position().top <= windscroll) {
                $('#section_nav a.active').removeClass('active');
                $('#section_nav a').eq(i).addClass('active');
            }
        });

    } else {
        $('#section_nav').removeClass('fixed');
        $('#section_nav a.active').removeClass('active');
        $('#section_nav a:first').addClass('active');
    }

}).scroll();    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});