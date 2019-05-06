
$(function(){
	
	$('.header_ul li').mouseover(function()
	{
		
		$(this).css('background','pink').siblings().css('background',' #40465e');

	})
	var i=0;
	$('.ban_ul li').eq(i).css('background',"red");
	$('.banner_img').eq(i).fadeIn(500).siblings().fadeOut(500);
	setInterval(function(e){
	
		i++;
		if(i==$('.banner img').length)
		{
			i=0;
		}
	$('.ban_ul li').eq(i).css('background',"red").siblings().css('background',"white")
		
		$('.banner_img').eq(i).fadeIn(500).siblings().fadeOut(500);
		
	},1500)
		
		
})

