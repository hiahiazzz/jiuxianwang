$(function(){
	//帮助中心显示/隐藏start
	$(".jx-head-icon").hover(function(){
		$(".jx-head-pop").css({"display":"block"})
	},function(){
		$(".jx-head-pop").css({"display":"none"})
	})
	$(".jx-head-pop").hover(function(){
		$(".jx-head-pop").css({"display":"block"})
	},function(){
		$(".jx-head-pop").css({"display":"none"})
	})
//帮助中心显示/隐藏end
//正则验证start
	//用户名验证start
	$('input').eq(0).change(function(){
	var val1=$('input').eq(0).val();
	var reg1=/^[a-zA-Z]{1}([a-zA-Z0-9]|[._-]){3,15}$/;
  	if(!reg1.test(val1) )
  	{
        $(".i1").css({"display":"block"});
        $(this).css({"border-color":"red"})
  	}else{
  		 $(".i1").css({"display":"none"});
  		  $(this).css({"border-color":"none"})
  	}
})
//用户名验证end
//密码验证start
	$('input').eq(1).change(function(){
	var val2=$('input').eq(1).val();
	var reg2=/^[a-z+A-Z+0-9+]{3,15}$/;
  	if(!reg2.test(val2) )
  	{
        $(".i2").css({"display":"block"});
        $(this).css({"border-color":"red"})
  	}else{
  		 $(".i2").css({"display":"none"});
  		  $(this).css({"border-color":"none"})
  	}
})
//密码验证end
//邮箱验证start
	$('input').eq(2).change(function(){
	var val3=$('input').eq(2).val();
	var reg3=/^[a-zA-Z0-9]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
  	if(!reg3.test(val3) )
  	{
        $(".i3").css({"display":"block"});
        $(this).css({"border-color":"red"})
  	}else{
  		 $(".i3").css({"display":"none"});
  		  $(this).css({"border-color":"none"})
  	}
})
	//重名验证
	$('input').eq(0).change(function(){
	$.get("http://47.104.244.134:8080/username.do",{username:$("input").eq(0).val()})
	.done(data=>{
		if(data.code==0){
			$(".i1").css({"display":"block"});
		}else{
			$(".i1").css({"border-color":"none"})
		}
	})
})
//邮箱验证end
//传送注册信息start
	$("#teshu_button").click(function(){
	$.post("http://47.104.244.134:8080/usersave.do",
	{username:$("input").eq(0).val(),
	password:$("input").eq(1).val(),
	email:$("input").eq(2).val(),
	sex:$('input:radio[name="sex_r"]:checked').val()}).done(data=>{
		if(data.code==0){
			alert("注册成功")
			location.href="login.html"
		}
		})
	
	})
//传送注册信息end
	$("#teshu_check").click(function(){
	if($("#teshu_check").prop("checked")==true){
		$.cookie("username",$("input").eq(0).val(),{expires:7})
		$.cookie("password",$("input").eq(1).val(),{expires:7})
		}
	})
	//性别

})