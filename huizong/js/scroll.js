 function timer(opj){
            $(opj).find('ul').animate({
                marginTop : "-40px"  
                },500,function(){  
                $(this).css({marginTop : "-10px"}).find("li:first").appendTo(this);  
            })  
        }
        $(function(){ 
            var num = $('.notice_active').find('li').length;
            if(num > 1){
               var time=setInterval('timer(".notice_active")',2500);
                $('.huabox').mousemove(function(){
                    clearInterval(time);
                }).mouseout(function(){
                    time = setInterval('timer(".notice_active")',2500);
                }); 
            }
            
            /*$(".news_ck").click(function(){
                location.href = $(".notice_active .notice_active_ch").children(":input").val();
            })*/
        });
