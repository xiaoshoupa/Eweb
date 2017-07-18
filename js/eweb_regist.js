$(function(){
	$("#regist_form").validate({
		rules:{
			phone:{
				required:true,
				regexp:/^1\d{10}$/,
				checkrepeat:true
			},
			num:{
				required:true,
				mynum:true
			},
			password1:{
				required:true,
				reg:/^\w{6,20}$/
			},
			password2:{
				required:true,
				checkpwd:true
			}
		},
		messages:{
			phone:{
				required:"手机号为必填项"
			},
			num:{
				required:"验证码为必填项"
			},
			password1:{
				required:"登录密码为必须填写"
			},
			password2:{
				required:"登录密码为必须填写"
			}
		},
		errorPlacement:function(error,element){
			error.appendTo(element.parent("div").parent("div").next("div"));
		},
		submitHandler:function(){
			var data = new Object;
			data.phone = $("#phone").val();
			data.pwd = $("#password1").val();
			var str = JSON.stringify(data);
			localStorage.setItem(data.phone,str);
			alert('注册成功！');
			$("#regist_form")[0].submit();
		},
	});

	//验证手机
	$.validator.addMethod("regexp",function(value,element,params){
		if(params.test(value)){
			element.parentNode.style.border="2px green solid";
			element.style.borderLeft="2px green solid";
			$(element).parent().children("i").css("color","green");
			$(element).parent().children("i").css("backgroundColor","#BBFFBB");
			return true;
		}else{
			element.parentNode.style.border="2px #a94442 solid";
			element.style.borderLeft="2px #a94442 solid";
			$(element).parent().children("i").css("color","#a94442");
			$(element).parent().children("i").css("backgroundColor","#f2dede");
			return false;
		}
	},"手机格式不正确，需为1开头的11位数字");
	
	//验证手机号码重复
	$.validator.addMethod("checkrepeat",function(value,element,params){
		var phoneTemp=$("#phone").val();
		var strs=localStorage.getItem(phoneTemp);
		if(strs==null&&phoneTemp!=null){
			element.parentNode.style.border="2px green solid";
			element.style.borderLeft="2px green solid";
			$(element).parent().children("i").css("color","green");
			$(element).parent().children("i").css("backgroundColor","#BBFFBB");
			return true;
		}else{
			element.parentNode.style.border="2px #a94442 solid";
			element.style.borderLeft="2px #a94442 solid";
			$(element).parent().children("i").css("color","#a94442");
			$(element).parent().children("i").css("backgroundColor","#f2dede");
			return false;
		}
	},"手机号码已注册");
	
	//验证码
	$.validator.addMethod("mynum",function(value,element,params){
		var num=$("#nums").html();
		if(num==value){
			element.parentNode.style.border="2px green solid";
			element.style.borderLeft="2px green solid";
			$(element).parent().children("i").css("color","green");
			$(element).parent().children("i").css("backgroundColor","#BBFFBB");
			return true;
		}else{
			element.parentNode.style.border="2px #a94442 solid";
			element.style.borderLeft="2px #a94442 solid";
			$(element).parent().children("i").css("color","#a94442");
			$(element).parent().children("i").css("backgroundColor","#f2dede");
			return false;
		}
	},"验证码错误");

	//验证密码
	$.validator.addMethod("reg",function(value,element,params){
		if(params.test(value)){
			element.parentNode.style.border="2px green solid";
			element.style.borderLeft="2px green solid";
			$(element).parent().children("i").css("color","green");
			$(element).parent().children("i").css("backgroundColor","#BBFFBB");
			return true;
		}else{
			element.parentNode.style.border="2px #a94442 solid";
			element.style.borderLeft="2px #a94442 solid";
			$(element).parent().children("i").css("color","#a94442");
			$(element).parent().children("i").css("backgroundColor","#f2dede");
			return false;
		}
	},"密码格式不正确，需由6-20位字母、数字、下划线组成");

	//验证二次输入密码
	$.validator.addMethod("checkpwd",function(value,element,params){
		var pwd=$("#password1").val();
		if(pwd==value){
			element.parentNode.style.border="2px green solid";
			element.style.borderLeft="2px green solid";
			$(element).parent().children("i").css("color","green");
			$(element).parent().children("i").css("backgroundColor","#BBFFBB");
			return true;
		}else{
			element.parentNode.style.border="2px #a94442 solid";
			element.style.borderLeft="2px #a94442 solid";
			$(element).parent().children("i").css("color","#a94442");
			$(element).parent().children("i").css("backgroundColor","#f2dede");
			return false;
		}
		
	},"两次输入的密码不一致");
});