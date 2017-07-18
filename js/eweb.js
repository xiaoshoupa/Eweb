// 睁眼闭眼
$(function(){	
	$(".eyes:eq(0)").click(function(){
		if($("#password1").attr("type")=="password"){
			$("#password1").attr("type","text");
			$("#pwd1").removeClass('icon iconfont icon-biyan');
			$("#pwd1").addClass('icon iconfont icon-zhengyan');
		}else{
			$("#password1").attr("type","password");
			$("#pwd1").removeClass('icon iconfont icon-zhengyan');
			$("#pwd1").addClass('icon iconfont icon-biyan');
		}
	});
	$(".eyes:eq(1)").click(function(){
		if($("#password2").attr("type")=="password"){
			$("#password2").attr("type","text");
			$("#pwd2").removeClass('icon iconfont icon-biyan');
			$("#pwd2").addClass('icon iconfont icon-zhengyan');
		}else{
			$("#password2").attr("type","password");
			$("#pwd2").removeClass('icon iconfont icon-zhengyan');
			$("#pwd2").addClass('icon iconfont icon-biyan');
		}
	});
});

//注册验证码
$(function(){
	$("#getNum").click(function(){
		$("#getNum").prop("disabled","true");
		$("#nums").show();
		$(".regist_content_tel>.regist_icon").css("width","180px");
		$("#num").width("120px");
		var nums=parseInt(1000+Math.random()*8999);
		$("#nums").html(nums);
		var i=10;
		var timer;
		goTime();
		timer=setInterval(goTime,1000);
		function goTime(){	
			i--;
			$("#getNum").css("fontSize","12px");
			$("#getNum").val(i+"秒后重新获取");
			if(i<=0){
				clearTimeout(timer);
				$("#getNum").prop("disabled",false);
				$("#getNum").css("fontSize","16px");
				$("#getNum").val("获取验证码");
			}
		}
	});
});

