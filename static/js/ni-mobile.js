$(function(){
	$('.reg_btn').click(function(){
		var n_username = $("input[name='username']").val(),
			n_mobile = $("input[name='mobile']").val(),
			n_password = $("input[name='password']").val(),
			n_name = $("input[name='name']").val(),
			n_email = $("input[name='email']").val(),
			n_organization = $("input[name='organization']").val();
		if($.trim(n_name)!='' && $.trim(n_mobile)!='' && $.trim(n_email)!='' && $.trim(n_password)!='' && $.trim(n_username)!=''){
			var emailRex = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/ ,
			mobileRex = /^1[3|4|5|7|8][0-9]{9}$/;
			if(mobileRex.test(n_mobile)){
				if(emailRex.test(n_email)){
					if(n_username.length>=4){
						if(n_password.length>=6){
							 $.ajax({
			                    type : "POST",  //提交方式  
			                   	url:'http://passport.huichengip.com/auth/hchb_reg',//路径  
			                    data : {  
			                        "username":n_username,
			                        "mobile":n_mobile,
			                        "password":n_password,
			                        "name":n_name,
			                        "email":n_email,
			                        "organization":n_organization
			                    },//数据，这里使用的是Json格式进行传输  
			                    success : function(result) {//返回数据根据结果进行相应的处理  
			                      handleregSuccess(result)
			                    }  
			                });  
						}else{
							handleError("密码不能少于6位",true);
						}
					}else{
						handleError("用户名不能少于4位",true);
					}
					
					
				}else{
					handleError("请输入正确的邮箱",true);
					
				}
			}else{
				handleError("请输入正确的手机号码",true);
				
			}
				
			}else{
				handleError("信息不能为空",true);
			}
	});
	$('input').keyup(function(){
		handleError(false)
	});

	var handleregSuccess=function(result){
		console.log(JSON.stringify(result))
	};

	var handleError = function(msg,status){
		var errEl = $('.regError');
		if(status){
			errEl.text(msg)
			errEl.stop().animate({'height':'30px'})
		}else{
			errEl.stop().animate({'height':'0'})
		}
		
	};
})