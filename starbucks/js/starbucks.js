$(function(){
    var swiper;

    $(".serch").click(function(){
        $(this).addClass("long");
        $(".header .nav-top ul").addClass("long");
    })

    $(".header .deck1 li").hover(function(){
        // 마우스 들어갈때

        //어떤 li가 hover된지 알아오기
        var $this = $(this);
        var i = $this.index();

        $this.addClass("on");

        // hover된 li에 맞는 detail-wrap 보여주기
        $(".detail-wrap").hide();
        $(".detail-wrap:eq(" + i + ")").show();
        $(".nav-detail").show();
    }
    ,function(){   
        // 마우스 나올때
        var $this = $(this);
        $(".nav-detail .detail-wrap").hide();
        $this.removeClass("on");
    })

    $(".nav-detail .detail-wrap").hover(function(){
    //마우스 들어갈때
        var $this = $(this);
        var i = $this.index();

        $(".nav-bottom > .header .deck1 li:eq(" + i + ")").addClass("on");
        $this.show();

   
   
    // 마우스 나올때
    },function(){
        var $this = $(this);
        var i = $this.index();

        $(".nav-bottom > .header .deck1 li:eq(" + i + ")").removeClass("on");
        $this.hide();
    })

    // 프로모션 swiper 열고 닫기
    $(".main1 .container .con-right-side > span").click(function(){
        var btn = $(this);
        
        if(btn.hasClass("btn-up")){
            btn.removeClass("btn-up")
            $(".main1_1").hide();
        }else{
            btn.addClass("btn-up")
            $(".main1_1").show();

            swiper.update();
            swiper.slideTo(1);

            if($(".play").length < 1){
                var $play = $("<span class='play'></span>");
                $(".main1_1 .swiper-pagination").prepend($play);
                var $stop = $("<span class='stop'></span>");
                $(".main1_1 .swiper-pagination").prepend($stop);

                $play.click(function(){
                    $play.hide();
                    $stop.show();
                    swiper.autoplay.start();
                });
            
                $stop.click(function(){
                    $stop.hide();
                    $play.show();
                    swiper.autoplay.stop();
                });

                $play.hide();
            }
        }
        
    })

    // 프로모션 swiper
    swiper = new Swiper('.main1_1.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        centeredSlides: true,
        grabCursor: true,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        pagination: {
          el: '.main1_1 .swiper-pagination',
          clickable: true,
        },
        navigation: {
            nextEl: '.main1_1 .swiper-button-next',
            prevEl: '.main1_1 .swiper-button-prev',
          },
      });

    //공지사항 swiper
      var vSwiper = new Swiper('.main1 .con-left-side .swiper-container', {
        direction: 'vertical',
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
          },
      });


      $(window).scroll(function(e){
        var initPosition = $(this).scrollTop();

        var main3Position = $(".main3").offset().top - $(window).height() / 2;
        var main5Position = $(".main5").offset().top - $(window).height() / 2;
        var main7Position = $(".main7").offset().top - $(window).height() / 2;
    
        if(initPosition > main3Position){
            gsap.to(".main3 .left-side", {opacity:1, x:0, duration: 1.5, ease: "power1.out"});
            gsap.to(".main3 .right-side", {opacity:1, x:0, duration: 1.5, ease: "power1.out"});
        }
        if(initPosition > main5Position){
            gsap.to(".main5 .left-side .main5-txt1", {opacity:1, x:0, duration: 1.5, ease: "power1.out"});
            gsap.to(".main5 .left-side .main5-txt2", {opacity:1, x:0, duration: 1.5, ease: "power1.out", delay: .3});
            gsap.to(".main5 .left-side .btn-area", {opacity:1, x:0, duration: 1.5, ease: "power1.out", delay: .6});
        }
        if(initPosition > main7Position){
            gsap.to(".main7 .right-side .main7-txt1", {opacity:1, x:0, duration: 1.5, ease: "power1.out"});
            gsap.to(".main7 .right-side .main7-txt2", {opacity:1, x:0, duration: 1.5, ease: "power1.out", delay: .3});
            gsap.to(".main7 .right-side .btn-area", {opacity:1, x:0, duration: 1.5, ease: "power1.out", delay: .6});
        }

    })

})