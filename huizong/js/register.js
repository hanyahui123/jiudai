$(function() {
	$(".footer").load("jdfooter.html")
	var f1,f2,f3,f4,f5,f6,f7,f8;
	//随机验证码
 	$('.code').createCode({len: 6});
	$('.input-code').blur(function() {
	 	if($(this).val().toLowerCase() !== $('.code').children('input').val().toLowerCase()) {
	 		$(".em-code").html("请输入正确的验证码");
	 		f7 = false;
	 	} else {
	 		$(".em-code").html('验证通过');
	 		f7 = true;
		}
	});

	$("input").eq(0).blur(function (){
		if($(this).val().length < 4){
			$("em").eq(0).html("用户名不可用");
			f1 = false;
		}else{
			$("em").eq(0).html("用户名可用");
			f1 = true;
		}
	})
	$("input:eq(1)").blur(function() {
		var psw = $("input:eq(1)").val();
		var regC = /[\u4e00-\u9fa5]/g;
		var regMima = /^[0-9a-zA-Z]{6,16}$/;//验证密码
		if(psw == ""){
			$("em").eq(1).html("请输入密码");
		}else if(regC.test(psw) == true){
			$("em").eq(1).html("不能输入中文");
		}else{
			if(regMima.test(psw) == true) {
				$("em").eq(1).html("密码可用");
				f2 = true;
			} else {
				$("em").eq(1).html("密码不可用");
				f2 = false;
			}
		}
	});
	$("input:eq(2)").change(function() {
		var psw = $("input:eq(1)").val();
		var psw1 = $("input:eq(2)").val();
		if(psw1 !== psw) {
			$("em").eq(2).html("密码与上次输入的不符");
			f3 = false;
		} else {
			$("em").eq(2).html("密码输入正确");
			f3 = true;
		}
	});
	$("input:eq(3)").blur(function() {
		var regphone = /^1(3|5|6|7|8|9)\d{9}$/;
		var phoneNumber = $(this).val();
		if(regphone.test(phoneNumber)) {
			$("em").eq(3).html("手机号格式正确");
			f4 = true;
		} else {
			$("em").eq(3).html("手机号格式错误，请重新输入");
			f4 = false;
		}
	});
	$("input:eq(4)").blur(function() {
		var email = $(this).val();
		var regEmail = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;//验证邮箱
		if(regEmail.test(email)) {
			$("em").eq(4).html("邮箱格式正确");
			f5 = true;
		} else {
			$("em").eq(4).html("邮箱格式错误，请重新输入");
			f5 = false;
		}
	});
	$(".radio").click(function (){
		var val = $('input:eq(5):checked').val();
		var val1 = $('input:eq(6):checked').val();
		if(val != null){
			$(".dealer").show();
			$(".company").hide();
		}
		if(val1 != null){
			$(".company").show();
			$(".dealer").hide();
		}
		if(val == null && val1 == null ){
			f6 = false;
			$(".registerd i").html("请选择您的类型");
		}else{
			f6 = true;
		}
	});
	$(".phone").blur(function (){
		var val = $(this).val();
		if(val == null){
			f8 = false;
			$("em").eq(5).html("请输入手机验证码");
		}else{
			f8 = true;
			$("em").eq(5).html("手机验证码正确");
		}
	})
	$(".sub").click(function(){
		if($(".check").is(":checked") == false){
			alert("请阅读并遵守美酒网用户服务协议");
		}
		if(f1&&f2&&f3&&f4&&f5&&f6&&f7&&f8){
			alert("注册成功")
		}else{
			alert("请填入必填项")
		}
	})
});