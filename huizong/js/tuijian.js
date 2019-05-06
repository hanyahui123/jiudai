$(function()
{
	
	$('.header_left li').mouseover(function()
	{
		
		$(this).css('background','#dd2726').siblings().css('background',' #333333');

	})
	
	
	
	
	$('.uls >ul li').mouseover(function()
	{
		
		$(this).css({background:"yellow"}).children('a').css('color','red').end().siblings().css('background',' #f10215').children('a').css('color','white');

	})
	
	
	
    $('.qing li ').hover(function(e)
	{
		
	
		var _this=$(this);
	 
		$(this).children('.small')
		.addClass('sm').stop()
		.animate({top:"600px"},200,function()
		{
		  
			if(_this.index()==3)
			{
				_this
		.children('.big').css('left',"-100px")
         .fadeIn().addClass('bg')
		}
			
		else{
			_this
		.children('.big')
         .fadeIn().addClass('bg')
		}
})

	},function(){$('.qing li')
	{
		$(this).children('.big').hide().end().children('.small').stop().animate({top:0},200);
		
	}
	}
	)
	
	 
	
})
