$(function(){
	$(".regist_agree").click(function(){
		$("#login_form").validate({
			rules:{
				login_phone:{
					required:true,
					check_login_phone:true,
				},
				password1:{
					required:true,
					check_login_pwd:true,
				},
				login_num:{
					required:true,
					check_login_num:true,
				},
			},
			messages:{
				login_phone:{
					required:"手机号为必填项",
					
				},
				password1:{
					required:"登录密码为必须填写",
					
				},
				login_num:{
					required:"验证码为必填项",
					
				},
			},
			errorPlacement:function(error,element){
				error.appendTo(element.parent("div").parent("div").next("div"));
			},
			submitHandler:function(){
				alert('登录成功！');
				$("#regist_form")[0].submit();
			},
		});
		//检验用户名
		$.validator.addMethod("check_login_phone",function(value,element,params){
			var phoneTemp=$("#login_phone").val();
			var pwdTemp=$("#password1").val();
			var strs=localStorage.getItem(phoneTemp);
			if(strs!=null){
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
		},"该账号不存在，请重新输入");

		// 检验密码
		$.validator.addMethod("check_login_pwd",function(value,element,params){
			var phoneTemp=$("#login_phone").val();
			var pwdTemp=$("#password1").val();
			var strs=localStorage.getItem(phoneTemp);
			// var current=new Object;
			if(strs!=null){
				var data = JSON.parse(strs);
				if(data.pwd==pwdTemp){
					element.parentNode.style.border="2px green solid";
					element.style.borderLeft="2px green solid";
					$(element).parent().children("i").css("color","green");
					$(element).parent().children("i").css("backgroundColor","#BBFFBB");
					// 将成功登录的用户名存入session
					sessionStorage.setItem('current_user',phoneTemp);
					return true;
				}else{
					element.parentNode.style.border="2px #a94442 solid";
					element.style.borderLeft="2px #a94442 solid";
					$(element).parent().children("i").css("color","#a94442");
					$(element).parent().children("i").css("backgroundColor","#f2dede");
					return false;
				}
			}else{
				element.parentNode.style.border="2px #a94442 solid";
				element.style.borderLeft="2px #a94442 solid";
				$(element).parent().children("i").css("color","#a94442");
				$(element).parent().children("i").css("backgroundColor","#f2dede");
				return false;
			}
		},"密码错误");

		//检验验证码
		$.validator.addMethod("check_login_num",function(value,element,params){
			var num=$("#login_nums").html();
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
	});
});
//获取登录验证码
$(function(){
	var nums=parseInt(1000+Math.random()*8999);
	numTemp=nums;
	$("#login_nums").html(nums);
	$(".regist_content_tel>.regist_icon").css("width","180px");
	$("#getLogin_num").click(function(){
		nums=parseInt(1000+Math.random()*8999);
		$("#login_nums").html(nums);
	});
});
