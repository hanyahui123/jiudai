 $(function () {
     $(".box1,.box2,.box3,.box4").mouseover(function () {
         $(".area").css("display", "block");
         $(this).addClass("box_active");
         $( this).find("span").css("display","inline-block");

     }).mouseout(function () {
         $(".area").css("display", "none");
         $(this).removeClass("box_active");
         $( this).find("span").css("display","none");
     })
     $(".area").mouseover(function () {
         $(".area").css("display", "block").mouseout(function () {
             $(".area").css("display", "none");
             
         })
     })
 })