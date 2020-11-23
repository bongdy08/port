$(function(){
    var prevPosition = 0;

    $(window).scroll(function(e){
        var initPosition = $(window).scrollTop();
        console.log(initPosition);
        var parallax_01_01_left = getNumber($("#parallax_01_01").css("left"));
        var parallax_01_02_left = getNumber($("#parallax_01_02").css("left"));
        var parallax_02_02_top = getNumber($("#parallax_02_02").css("top"));
        var parallax_02_02_right = getNumber($("#parallax_02_02").css("right"));
        var parallax_02_03_top = getNumber($("#parallax_02_03").css("top"));
        var parallax_02_03_right = getNumber($("#parallax_02_03").css("right"));


        //아래로움직일때
        if(initPosition > prevPosition){
            if(initPosition < 2000){
                if(parallax_01_01_left < 120){
                    $("#parallax_01_01").css("left",  (parallax_01_01_left + 2) + "px");
                }
                if(parallax_01_02_left > 250){
                    $("#parallax_01_02").css("left",  (parallax_01_02_left - 2) + "px");
                }
            }else{
                if(parallax_02_02_top > 156 && parallax_02_02_right < 178){
                    $("#parallax_02_02").css("opacity", 1);
                    $("#parallax_02_02").css("top", (parallax_02_02_top -4) + "px");
                    $("#parallax_02_02").css("right", (parallax_02_02_right +1) + "px");
                }
                if(parallax_02_03_top > 96 && parallax_02_03_right < 174){
                    $("#parallax_02_03").css("top", (parallax_02_03_top -11) + "px");
                    $("#parallax_02_03").css("right", (parallax_02_03_right +1) + "px");
                }
            }
            
        }else{//위로움직일때
            if(initPosition < 2000){
                if(parallax_01_01_left > 0){
                    $("#parallax_01_01").css("left",  (parallax_01_01_left - 2) + "px");
                }
                if(parallax_01_02_left < 374){
                    $("#parallax_01_02").css("left",  (parallax_01_02_left + 2) + "px");
                }
            }else{
                if(parallax_02_02_top == 228){
                    $("#parallax_02_02").css("opacity", 0);
                }
                if(parallax_02_02_top < 228 && parallax_02_02_right > 160){
                    $("#parallax_02_02").css("top", (parallax_02_02_top +4) + "px");
                    $("#parallax_02_02").css("right", (parallax_02_02_right -1) + "px");
                }
                if(parallax_02_03_top < 228 && parallax_02_03_right > 162){
                    $("#parallax_02_03").css("top", (parallax_02_03_top +11) + "px");
                    $("#parallax_02_03").css("right", (parallax_02_03_right -1) + "px");
                }
            }
        }
        prevPosition = initPosition;
    });

    function getNumber(str){
        return Number(str.replace(/[^0-9]/g,""));
    }

    var swiper = new Swiper('.swiper-container', {
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });

    $('.main1-title li').click(function(){
        var i = $(this).index() + 1;

        $('.main1 .container > div').hide();
        $('.main1-title li a').removeClass('on');
        $('.main1_0'+i).show();
        $(this).find('a').addClass('on');

    });

    function initPage(){
        $('.main1-title li:eq(0)').trigger('click');
    }
    
    initPage();
    
});