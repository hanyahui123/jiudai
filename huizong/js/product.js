$(function() {
	$(".header").load("header.html");
	$(".footer").load("footer.html");
	$(".more").click(function() {
		$(".allbrand").show();
		$(".close").show();
		$(".more").hide();
		$(".brand-sort:eq(0)").css("height", "299px");
		$(".somebrand").hide();
	});
	$(".close").click(function() {
		$(".allbrand").hide();
		$(".more").show();
		$(".close").hide();
		$(".brand-sort:eq(0)").css("height", "80px");
		$(".somebrand").show();
	});
	$(".sort-header button:eq(0)").click(function() {
		$(".sort-header button:eq(0)").css("display", "none")
		$(".sort-header button:eq(1)").css("display", "block")
		$(".brand").slideUp();
	});
	$(".sort-header button:eq(1)").click(function() {
		$(".sort-header button:eq(1)").css("display", "none")
		$(".sort-header button:eq(0)").css("display", "block")
		$(".brand").slideDown();
	});

	function addA(obj) {
		$(obj.a).each(function() {
			$(this).click(function(e) {
				var evt = event || e;
				evt.preventDefault();
				var $_this = $(this);
				$(this).css("color", "red")
					.siblings().css("color", "#000000");
				if($("#" + obj.id).length > 0) {
					$("#" + obj.id).html($(this).html() + "<span>X</span>");
				} else {
					$(".first-sort:eq(0) .mid-content").append("<a id='" + obj.id + "'>" + $(this).html() + "<span>X</span></a>");
				}

				$(".shaixuan .mid-content span").click(function() {
					$_this.css("color", "#000");
					$(this).parent().remove();
				})
			})
		})
	}
	addA({
		a: ".first-sort:eq(1) .mid-content a",
		id: "leibie"
	});
	addA({
		a: ".first-sort:eq(2) .mid-content a",
		id: "pinpai"
	});
	addA({
		a: ".first-sort:eq(3) .mid-content a",
		id: "diqu"
	});
	addA({
		a: ".first-sort:eq(4) .mid-content a",
		id: "xiangxing"
	});
})