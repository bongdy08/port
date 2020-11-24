(function () {

    var s = skrollr.init({
        forceHeight: false
    });

    if ($(window).width() <= 640) {
        skrollr.init().destroy();
      }
})();

$(document).ready(function(){
    eventBind();
    makeWellComeAnimate(); 
});

function eventBind(){

    $(".header .menu li").click(function(e){
        var index = $(this).index();
        var offset = 50
        if(index == 0){
            $("html, body").animate({
                scrollTop : $("#section2").offset().top + offset}, 500);
        }
        else if(index == 1){
            $("html, body").animate({
                scrollTop : $("#section3").offset().top + offset}, 500);
        }
        else if(index == 2){
            $("html, body").animate({
                scrollTop : $("#section5").offset().top + offset}, 500);
        }
    })
    $(".menu1 li").click(function(e){
        var index = $(this).index();
        var offset = 50
        if(index == 0){
            $("html, body").animate({
                scrollTop : $("#section1").offset().top}, 500);
        }
        else if(index == 1){
            $("html, body").animate({
                scrollTop : $("#section2").offset().top + offset}, 500);
        }
        else if(index == 2){
            $("html, body").animate({
                scrollTop : $("#section3").offset().top + offset}, 500);
        }
        else if(index == 3){
            $("html, body").animate({
                scrollTop : $("#section5").offset().top + offset}, 500);
        }
    })
    
    $(window).scroll(function(e){
        var initPosition = $(this).scrollTop();

        var sec2Position = $("#section2").offset().top - $(window).height() / 2;
        var txtPosition = $(".sec2 .txtWrap1").offset().top - $(window).height() / 2;
    
        var sec3Position = $("#section3").offset().top - $(window).height() / 2;
        var panel1Position = $(".sec3 .panel1").offset().top - $(window).height() / 2;
        var panel2Position = $(".sec3 .panel2").offset().top - $(window).height() / 2;
        var panel3Position = $(".sec3 .panel3").offset().top - $(window).height() / 2;
        var panel4Position = $(".sec3 .panel4").offset().top - $(window).height() / 2;
        var panel5Position = $(".sec3 .panel5").offset().top - $(window).height() / 2;
    
        if(initPosition > sec2Position){
            gsap.to(".sec2 h2 span", {opacity:1, y:0, duration: 1, ease: "back.out(1.7)", stagger: 0.1});
        }
        if(initPosition > txtPosition){
            gsap.to(".sec2 .txtWrap1 .about-left svg", {opacity:1, scale : 1, rotation: 360, duration: 0.5, ease: "power1.out"});
            gsap.to(".sec2 .txtWrap1 .about-right h3", {opacity:1, x:0, duration: 0.5, ease: "power1.out", delay: 0.2});
            gsap.to(".sec2 .txtWrap1 .about-right p", {opacity:1, x:0, duration: 0.5, ease: "power1.out", delay: 0.4});
            gsap.to(".sec2 .txtWrap2 .about-left p", {opacity:1, x:0, duration: 0.5, ease: "power1.out", delay: 0.6});
            gsap.to(".sec2 .txtWrap2 .about-right img", {opacity:1, duration: 0.5, ease: "power1.out", delay: 0.8});
        }
        if(initPosition > sec3Position){
            gsap.to(".sec3 h2 span", {opacity:1, y:0, duration: 1, ease: "back.out(1.7)", stagger: 0.1});
        }
        if(initPosition > panel1Position){
            $(".sec3 .panel1 .imgWrap").addClass("show")
            gsap.to(".sec3 .panel1 .deco", {opacity:1, y:0, duration: 1, ease: "power4.out"});
            gsap.to(".sec3 .panel1 .work_ttl", {opacity:1, y:0, duration: 0.5, ease: "power4.out", delay: 0.2});
            gsap.to(".sec3 .panel1 .work_desc", {opacity:1, y:0, duration: 0.5, ease: "power4.out", delay: 0.5});
            gsap.to(".sec3 .panel1 .btn", {opacity:1, y:0, duration: 0.5, ease: "power4.out", delay: 0.8});
        }
        if(initPosition > panel2Position){
            $(".sec3 .panel2 .imgWrap").addClass("show")
            gsap.to(".sec3 .panel2 .deco", {opacity:1, y:0, duration: 1, ease: "power4.out"});
            gsap.to(".sec3 .panel2 .work_ttl", {opacity:1, y:0, duration: 0.5, ease: "power4.out", delay: 0.2});
            gsap.to(".sec3 .panel2 .work_desc", {opacity:1, y:0, duration: 0.5, ease: "power4.out", delay: 0.5});
            gsap.to(".sec3 .panel2 .btn", {opacity:1, y:0, duration: 0.5, ease: "power4.out", delay: 0.8});
        }
        if(initPosition > panel3Position){
            $(".sec3 .panel3 .imgWrap").addClass("show")
            gsap.to(".sec3 .panel3 .deco", {opacity:1, y:0, duration: 1, ease: "power4.out"});
            gsap.to(".sec3 .panel3 .work_ttl", {opacity:1, y:0, duration: 0.5, ease: "power4.out", delay: 0.2});
            gsap.to(".sec3 .panel3 .work_desc", {opacity:1, y:0, duration: 0.5, ease: "power4.out", delay: 0.5});
            gsap.to(".sec3 .panel3 .btn", {opacity:1, y:0, duration: 0.5, ease: "power4.out", delay: 0.8});
        }
        if(initPosition > panel4Position){
            $(".sec3 .panel4 .imgWrap").addClass("show")
            gsap.to(".sec3 .panel4 .deco", {opacity:1, y:0, duration: 1, ease: "power4.out"});
            gsap.to(".sec3 .panel4 .work_ttl", {opacity:1, y:0, duration: 0.5, ease: "power4.out", delay: 0.2});
            gsap.to(".sec3 .panel4 .work_desc", {opacity:1, y:0, duration: 0.5, ease: "power4.out", delay: 0.5});
            gsap.to(".sec3 .panel4 .btn", {opacity:1, y:0, duration: 0.5, ease: "power4.out", delay: 0.8});
        }
        if(initPosition > panel5Position){
            $(".sec3 .panel5 .imgWrap").addClass("show")
            gsap.to(".sec3 .panel5 .deco", {opacity:1, y:0, duration: 1, ease: "power4.out"});
            gsap.to(".sec3 .panel5 .work_ttl", {opacity:1, y:0, duration: 0.5, ease: "power4.out", delay: 0.2});
            gsap.to(".sec3 .panel5 .work_desc", {opacity:1, y:0, duration: 0.5, ease: "power4.out", delay: 0.5});
            gsap.to(".sec3 .panel5 .btn", {opacity:1, y:0, duration: 0.5, ease: "power4.out", delay: 0.8});
        }

        // skroll.js를 사용한 가로모드
        $(".skroll").text(initPosition);

        offset = initPosition - $("#section4").offset().top;
        $(".offset").text(offset);

        if(initPosition > $("#section4").offset().top){
            $(".sec4").css("left", -offset);
        }

    })

    // .sec4 애니메이션4
    document.querySelector(".hero").addEventListener('mousemove', function(e){
        const hero = document.querySelector(".hero");
        const walk = 100;

        const { offsetWidth: width, offsetHeight: height } = hero;
        let { offsetX: x, offsetY: y } = e;

        // .hero h1에 마우스 hover했을 경우
        if (hero !== e.target) {
            x = x + e.target.offsetLeft;
            y = y + e.target.offsetTop;
        }

        const xWalk = Math.round((x / width * walk) - (walk / 2));
        const yWalk = Math.round((y / height * walk) - (walk / 2));

        document.documentElement.style.setProperty(`--x`, `${xWalk}px`);
        document.documentElement.style.setProperty(`--y`, `${yWalk}px`);
    
    });





    // .sec4 애니메이션 레이어팝업
    $('.panel .open .btn').click(function(e){
        var i = $('.panel .open .btn').index(this);

        if( i == 3){
            $('[data-tab=js]').css('display','inline-block');
        }
        else{
            $('[data-tab=js]').css('display','none');
        }
        $('#modal').addClass("show");
        $('html').css('overflow','hidden');

        //버튼 클릭 데이터 저장 
        $('#modal').data("index", i);

        $(".modal-cont .tab a[data-tab=html]").trigger("click");
    });

    $("#modal .close-btn").click(function(e){
        $("#modal").removeClass("show");
        $('html').css('overflow','inherit');
    });

    
    // .sec4 애니메이션 레이어팝업 탭메뉴
    $(".modal-cont .tab a").click(function(e){
        var tab_class = $(this).attr('data-tab');
        $('.modal-cont .tab a').removeClass('on');
        $('.tabcontent').removeClass('on');
        
        //내용넣기
        var index = $('#modal').data("index");
        var data = dataObj[index][tab_class];
        $('#modal .tabcontent.' + tab_class + " code").text(data);
        var block = document.querySelector('#modal .tabcontent.' + tab_class + " code");
        Prism.highlightElement(block);

		$(this).addClass('on');
        $("."+tab_class).addClass('on');
    });



    
}


function makeWellComeAnimate(){
    // 한 글자씩 나누기
    $(".splice").each(function () {
        let txt = $(this).text();
        let split = txt.split("").join("</span><span aria-hidden='true'>");
        split = "<span aria-hidden='true'>" + split + "</span>";
        $(this).html(split).attr("aria-label", txt);

    });

    gsap.to(".sec1 .txt1 em:nth-child(1) span", {rotation: 0, opacity:1, y:0, duration:1, ease: "power4.out", stagger: 0.1});
    gsap.to(".sec1 .txt1 em:nth-child(2) span", {rotation: 0,opacity:1, y:0, duration:1, ease: "power4.out", delay: 0.3, stagger: 0.1});
    gsap.to(".sec1 .txt1 em:nth-child(3) span", {rotation: 0,opacity:1, y:0, duration:1, ease: "power4.out", delay: 0.6, stagger: 0.1});
    gsap.to(".sec1 .txt2 em:nth-child(1) span", {rotation: 0,opacity:1, y:0, duration:1, ease: "power4.out", stagger: 0.1});
    gsap.to(".sec1 .txt2 em:nth-child(2) span", {rotation: 0,opacity:1, y:0, duration:1, ease: "power4.out", delay: 0.3, stagger: 0.1});
    gsap.to(".sec1 .txt2 em:nth-child(3) span", {rotation: 0,opacity:1, y:0, duration:1, ease: "power4.out", delay: 0.6, stagger: 0.1});
    
    gsap.to(".sec1 img", {opacity:1, y:0, duration:1.5, ease: "back.out(1.7)", delay: 0.9, stagger: 0.1});
}


