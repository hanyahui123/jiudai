$(function() {
	var count = 0;
	$(".pic li").eq(count).fadeIn()
	setInterval(function() {
		count++;
		if(count == $(".pic li").length) {
			count = 0;
		}
		$(".pic li").eq(count).fadeIn().siblings().fadeOut()
	}, 2000)
	$(".footer-banner ul").width(300 * $(".footer-banner li").length);
	var settimes; //定时器
	var $this = $(".footer-banner");
	//方法
	function scrollNews(nature) {
		var scroll = nature.find("ul:first");
		var lineHeight = 300;
		scroll.animate({
			"margin-left": -300 + "px"
		}, 3000, function() {
			scroll.css({
				"margin-left": "0px"
			}).find("li:first").appendTo(scroll);
		});
	}
	//悬停事件
	$this.hover(function() {
		clearInterval(settimes); //清楚定时器
	}, function() {
		settimes = setInterval(function() {
			scrollNews($this);
		},6000);
	}).trigger("mouseout")
})