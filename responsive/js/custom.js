(function( func ) {
    $.fn.slideToggle = function() { // replace the existing function on $.fn
        func.apply( this, arguments ); // invoke the original function
        this.trigger('angleChange'); // trigger the custom event
        return this; // retain jQuery chainability
    }
})($.fn.slideToggle); // pass the original function as an argument

$(".nav").on("angleChange", function(){
    $(".btn").toggleClass("open");
    if($(".btn").hasClass("open")){
        // open이 있을 때
        $(".btn").find("i").attr("class","fa fa-angle-up")
    } else{
        // open이 없을 때
        $(".btn").find("i").attr("class","fa fa-angle-down")
    }
})

// 접기 펼치기
$(".btn").click(function(e){
    e.preventDefault();
    $(".nav").slideToggle();   

    // return false;
});

$(window).resize(function(){
    var wwidth = $(this).width();
    if(wwidth < 600){
        //네비가 오픈 되어 있으면 
        if($(".nav").css("display") == "block"){
            $(".nav").slideToggle();  
        }
    } 
});

// 접기 펼치기
// $(".btn").click(function(e){
// e.preventDefault();
// var wwidth = $(window).width();
// if(wwidth >= 600){
//     $(".nav").slideToggle(); 
// } 

// $(this).toggleClass("open");

// if($(this).hasClass("open")){
//     // open이 있을 때
//     $(this).find("i").attr("class","fa fa-angle-up")
// } else{
//     // open이 없을 때
//     $(this).find("i").attr("class","fa fa-angle-down")
// }

// return false;
// });

$(window).resize(function(){
    var wwidth = $(this).width();
    if(wwidth < 600){
        //네비가 오픈 되어 있으면 
        if($(".nav").css("display") == "block"){
            //버틀 처리한다 
            $(".btn").trigger("click");
        }

        $(".nav").removeAttr("style");
    } 
});


//라이트 박스
$(".lightbox").lightGallery({
    autoplay: true,
    pause: 3000,
    progressBar: true
}); 
//이미지 슬라이더
$(".slider").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                autoplay: false,
                }
        }
    ]
});

//sns 공유하기
$(".facebook").click(function(e){
    e.preventDefault();
    window.open('https://www.facebook.com/sharer/sharer.php?u=' +encodeURIComponent(document.URL)+'&t='+encodeURIComponent(document.title), 'facebooksharedialog', 'menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=300, width=600'); 
});
$(".twitter").click(function(e){
    e.preventDefault();
    window.open('https://twitter.com/intent/tweet?text=[%EA%B3%B5%EC%9C%A0]%20' +encodeURIComponent(document.URL)+'%20-%20'+encodeURIComponent(document.title), 'twittersharedialog', 'menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=300, width=600');
});