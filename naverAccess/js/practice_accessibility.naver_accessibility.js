$(function(){
    
    var swiper = new Swiper('.swiper-container', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });

    swiper.on('slideChange', function(){
        $this = $(this);        
        var page = $($this[0].el).find(".swiper-slide:eq(" + $this[0].activeIndex + ")").data("page");
        $(".page strong").text(page);
    });

    $(".first-btn").on("click", function(){
        swiper.slideTo(0);
    })

    $(".q-bottom button").click(function(){
        $this = $(this);
        
        if($this.hasClass("btn-input")){
            var page = $this.closest("li").data("page");
            var value = $this.closest("li").find("input[type='text']").val();
            $(".a" + page + " .answer").text("<alt=" + value + ">");
        }
        swiper.slideNext();
    })


});