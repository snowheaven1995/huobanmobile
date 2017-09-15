$(function(){
    $('.btn_reg').click(function () {
       window.location.href = 'mobile_reg' ;
    });
    $('.mobileReg_Logo').click(function () {
       window.location.href = '/'
    });
	$('.btn_login').click(function () {
			var username = $("input[name='username']").val(),
			password = $("input[name='password']").val();
			if($.trim(username) == ''||$.trim(password)==''){
			    handleError("用户名或密码不能为空",true);
            }
            else{
			    $.ajaxSetup({crossDomain: true, xhrFields: {withCredentials: true}});
                $.ajax({
                    type: "POST",  //提交方式
                    url: 'http://passport.huichengip.com/auth/user_login',//路径
                    data: {
                        "username": username,
                        "password": password,
                        "platform": 2,
                        "login_type":"user"

                    },//数据，这里使用的是Json格式进行传输
                    success: function (result) {//返回数据根据结果进行相应的处理
                        console.log('rev is ',JSON.stringify(result))
                        var token = result.data.hcip_token;
                        var code = result.code;
                        console.log(token);
                        var url = encodeURI('http://ht.huichenghuoban.com/zhuyi?hctoken='+token);
                        if(code ==200){
                            window.location.href = 'http://passport.huichengip.com/auth/auth_login_api/?hctoken='+token+'&auth_url='+url;
                        }



                    }
                });
            }
    });
	//点击注册后的事件
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
	//处理input keyUp之后让错误提示消失
	$('input').keyup(function(){
		handleError(false)
	});
	//处理注册成功
	var handleregSuccess=function(result){
		console.log(JSON.stringify(result));
		window.location.href='mobile_welcome';
	};
	//处理错误提示
	var handleError = function(msg,status){
		var errEl = $('.regError');
		if(status){
			errEl.text(msg);
			errEl.stop().animate({'height':'30px'});
			setTimeout(hidden,3000);
		}else{
			hidden()
		}
		function hidden() {
			errEl.stop().animate({'height':'0'})
        }
	};
	//处理点击预约演示提交的事件
	$(".pesDemo_btn").click(function(){
		var n_person = $('#contactName').val(),
			n_telephone = $('#contactTel').val(),
			n_email = $('#contactEmail').val(),
			n_company = $('#contactCompany').val(),
			n_problem = $('#question').val();
			if($.trim(n_person)!=''&&$.trim(n_telephone)!=''&&$.trim(n_email)!=''&&$.trim(n_company)!=''&&$.trim(n_problem)!=''){
				var emailRex = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/ ,
				mobileRex = /^1[3|4|5|7|8][0-9]{9}$/;
				if(mobileRex.test(n_telephone)){
					if(emailRex.test(n_email)){
						 $.ajax({
			                    type : "POST",  //提交方式  
			                   	url:'http://gop.huichengip.com/utils/send_demo_mailer',//路径  
			                    data : {  
			                        "person":n_person,
			                        "telephone":n_telephone,
			                        "email":n_email,
			                        "company":n_company,
			                        "problem":n_problem
			                    },//数据，这里使用的是Json格式进行传输  
			                    success : function(result) {//返回数据根据结果进行相应的处理  
			                      handlePesDemoSuccess(result)
			                    }  
			                });  
					}else{handleError("请输入正确的邮箱",true);}
				}else{handleError("请输入正确的手机号码",true);}

			}else{handleError("信息不能为空",true);}
	});

	var handlePesDemoSuccess = function(result){
		console.log(JSON.stringify(result))
	}

	
	









})














