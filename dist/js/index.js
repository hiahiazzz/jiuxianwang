
$(function(){
//////////////////轮播start
				var count=0;
				$('.bigUl li').eq(count).fadeIn()
					.siblings().fadeOut()
				$(".smallUl li").eq(count).css({"background":"#dd102e"})
				.siblings().css({"background":"#000"})	
					 timer=setInterval(function(){
					count++
					if(count==$('.bigUl li').length){
					count=0
					}
					$('.bigUl li').eq(count).fadeIn()
					.siblings().fadeOut()
					$(".smallUl li").eq(count).css({"background":"#dd102e"})
					.siblings().css({"background":"#000"})
				},3000)
				
				
				$(".smallUl li").hover(function(){
					clearInterval(timer)
					$(this).css({"background":"#dd102e"})
					.siblings().css({"background":"#000"})
					var index=$(this).index()
					$('.bigUl li').eq(index).stop().fadeIn()
					.siblings().fadeOut()
				},function(){
					var count=$(this).index()
					 timer=setInterval(()=>{
					count++
					if(count==$('.bigUl li').length){
					count=0
					}
					$('.bigUl li').eq(count).fadeIn()
					.siblings().fadeOut()
					$(".smallUl li").eq(count).css({"background":"#dd102e"})
					.siblings().css({"background":"#000"})
				},3000)
				})
//////////////////轮播end
//////////////////	indexTabBox数据展示start	

//////////////////indexTabNewCon 展示
				$(".indexTabNewNav li").mouseover(function(){
					$(this).css({"border":"none","border-top":"2px solid #c41921","background":"#fff"})
					.siblings().css({"border":"1px solid #ececec","background":"#f9f9f9"})
				})
				$(".indexTabNewNav .s1").mouseover(function(){
					$('#NewList_2').css({"display":"none"})
					$('#NewList_1').css({"display":"block"})
				})
				$(".indexTabNewNav .s2").mouseover(function(){
					$('#NewList_1').css({"display":"none"})
					$('#NewList_2').css({"display":"block"})
				})
				var count666=0
				 setInterval(function(){
					count666-=268
					if(count666<=-1072){
					count666=0
					$('.sliderBox .indexTuanList_bigUl').css({'margin-left':"0px"})
					}
					$('.sliderBox .indexTuanList_bigUl').animate({'margin-left':count666+"px"},500)
				},2000)
		////////////////////racelist数据展示
			$.getJSON('data/index1.json',function(data){
				
					var str=""
					$.each(data,function(x,y){
						str+=`<li>
							<img src="${y.img}"/>
							<a href="#">${y.title}</a>
							<span>${y.price}</span>
						</li>`
					})
					$(".raceList ul").html(str)
				})
		////////////////////优惠推荐轮播start
			var count=0
			$(".raceArrow").click(function(){
				var index=$(this).index()
				if(index==1){
					count-=1190
					if(count>-2380){
					$('.receBoxs').animate({'margin-left':count+"px"},500)
					}else{
						count=-2380
					}
					
				}
				if(index==0){
					count+=1190
					if(count<1190){
					$('.receBoxs').animate({'margin-left':count+"px"},500)
					}else{
						count=0
					}
				}
			})
	////////////////////优惠推荐轮播End
	////////////////////1F白酒馆轮播strat
					var count777=0
	 setInterval(function(){
					count777-=210
					if(count777<=-840){
					count777=0
					$('.imgBox .imgBox_ul').css({'margin-left':"0px"})
					}
					$('.imgBox .imgBox_ul').animate({'margin-left':count777+"px"},500)
				},2000)
	 	////////////////////1F白酒馆轮播end
	 	////////////////////Floor1数据展示数据展示start
			$.getJSON('data/index.json',function(data){
					var str=""
					$.each(data,function(x,y){
						str+=`<li>
							<img src="${y.img}"/>
							<a href="#">${y.title}</a>
							<span>${y.price}</span>
						</li>`
					})
					$(".spiritList .clearfix").html(str)
				})
			$('#teshuhover11').hover(function(){
				$('.teshu99999999 img').css({"display":"block"})
			},function(){
				$('.teshu99999999 img').css({"display":"none"})
			})
		////////////////////Floor1数据展示数据展示end
		////////////////////商品类型数据展示start
		$.get("http://47.104.244.134:8080/goodstypelist.do",{l:1}).done(data=>{
			var str=""
			for(var i in data){
				str+=`<li class="catItem bg" id="_nowactstr">
							<div class="catItemCon" name="__home_fenleibai">
								<h3><a href="#">${data[i].name}</a></h3>
								<div class="categoryCon">
									<p><a href="#">茅台</a>					
									<a class="on" href="#">五粮液</a>
									<a class="on" href="#">酒鬼</a>
									<a href="#">汾酒</a></p>												
									<p><a href="#">浓香型</a>					
									<a class="on" href="#">酱香型</a>
									<a href="#">贵州</a>
									<a href="#">四川</a></p>												
								</div>
							</div>
						</li>`
			}
			$(".navCategoryMenu .nav_L").prepend(str)
			$('.nav_L li').hover(function(){
				var index=$(this).index()
				if(index<5){
					$.get("http://47.104.244.134:8080/goodstypelist.do",{l:2}).done(data=>{
				var str=`<li class="catItem bg" id="_nowactstr">
							<div class="catItemCon" name="__home_fenleibai">
								<h3><a href="#">${data[index].name}</a></h3>
								<div class="categoryCon">
									<p><a href="#">茅台</a>					
									<a class="on" href="#">五粮液</a>
									<a class="on" href="#">酒鬼</a>
									<a href="#">汾酒</a></p>												
									<p><a href="#">浓香型</a>					
									<a class="on" href="#">酱香型</a>
									<a href="#">贵州</a>
									<a href="#">四川</a></p>												
								</div>
							</div>
						</li>`
			$(".navCategoryMenu .menuBox").html(str);
			$(".navCategoryMenu .menuBox").css({"display":"block"})
			})
				}
			},function(){
			$(".navCategoryMenu .menuBox").css({"display":"none"})	
			})
	
		})
		$(".navCategoryMenu .menuBox").hover(function(){
			$(this).css({"display":"block"})
		},function(){
			$(this).css({"display":"none"})
		})
		////////////////////商品类型数据展示end
		//////底部广告滚动监听start
				$(window).scroll(function(){
					var t=$(this).scrollTop()
					if(t>500){
						$('.bigad').fadeIn();
					}else{
						$('.bigad').fadeOut();
					}
				})
		//////底部广告滚动监听end	
				$.getJSON('data/index2.json',function(data){
			var str=""
			for(let i of data[0]){
				str+=`<li>
							<img src="${i.img}"/>
							<a href="#">${i.title}</a>
							<span>${i.price}</span>
						</li>`
			}
			$(".clearfix678").html(str)
		})
		$(".indexTabNav_ul>li").mouseover(function(){
			var index=$(this).index()
		$.getJSON('data/index2.json',function(data){
			var str=""
			for(let i of data[index]){
				str+=`<li>
							<img src="${i.img}"/>
							<a href="#">${i.title}</a>
							<span>${i.price}</span>
						</li>`
			}
			$(".clearfix678").html(str)
		})
	})
		//////疯狂抢购
		$(".indexTabNav_ul>li").mouseover(function(){
			$(this).css( {"border":"0",
                "border-top":"2px #cc0000 solid",
                "background":"#fff"})
			.siblings().css({"border":"1px solid #ececec","background":"#f9f9f9"})
		})
		//文本框val获取/失去焦点变化
		$('#searchHeader666').focus(function(){
			$(this).val('')
		})
		$('#searchHeader666').blur(function(){
			$(this).val('品质酒窖:部分下单享好礼')
		})
		/////登录显示用户名
	
		if($.cookie("username")!=undefined && $.cookie("password")!=undefined){
		$('.hl_o').html($.cookie("username")).css({'color':"red"})
		}else{
		$('.hl_o').html($.cookie("请登录"))	
		}
		
})		
			
