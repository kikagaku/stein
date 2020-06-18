if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
   var w = $(".axis li").width();
 $(".axis li").css({
   height: w + "px",
   lineHeight: w + "px"
 });
   $(".industry li").css({
   height: w + "px",
   lineHeight: w + "px"
 });

 var m_w = $(".member-list-half li").width();
 if (m_w > 220) {
   m_w = 220;
 }
 $(".member-list li img").css({
   height: m_w + "px",
       width: m_w + "px"
 });

 $('.track-seed').on("click", function() {
   $(this).next('div').slideToggle();
 });

   $(".track-detail .datetime div").each(function(index, ele){
       var h = $(ele).height();
       $(ele).css({
           top: 0,
           bottom: 0
     });
   });
} else {
   $(".track-detail .datetime div").each(function(index, ele){
       var h = $(ele).height();
       $(ele).css({
       height: h + "px",
           top: 0,
           bottom: 0
     });
   });
}

$('a[href^="#"]').click(function(){
 var speed = 500;
 var href= $(this).attr("href");
 var target = $(href == "#" || href == "" ? 'html' : href);
 var position = target.offset().top;
 $("html, body").animate({scrollTop:position}, speed, "swing");
 return false;
});
