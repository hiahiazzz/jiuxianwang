$(function(){
//文本框val获取/失去焦点变化
		$('#searchHeader666').focus(function(){
			$(this).val('')
		})
		$('#searchHeader666').blur(function(){
			$(this).val('品质酒窖:部分下单享好礼')
		})

		//////全部商品分类样式设置start
		$('#nav_h2').hover(function(){
			$('#nav_LLL').css({"display":"block"})
		},function(){
			$('#nav_LLL').css({"display":"none"})
		})
		$('#nav_LLL').hover(function(){
			$('#nav_LLL').css({"display":"block"})
		},function(){
			$('#nav_LLL').css({"display":"none"})
		})
		$('.menuBox').hover(function(){
			$('#nav_LLL').css({"display":"block"})
		},function(){
			$('#nav_LLL').css({"display":"none"})
		})
		//////全部商品分类样式设置end
		//////中图路径切换start
		$('.img_L').mouseover(function(){
			$('.img_M').attr('src',$(this).attr("src"))
			$('#img_B').attr('src',$(this).attr("src"))
		})
		$(this).css({'border':'2px solid #c33'})
		$('#show-list_ul li').mouseover(function(){
			$(this).css({'border':'2px solid #c33'})
		.siblings().css({'border':'2px solid #fff'})
		})
		//////中图路径切换end
		////////放大镜移动事件
		var p_left=$('.show-pic_M').offset().left;
		var p_top=$('.show-pic_M').offset().top;
		var s_w=$('#fdj').outerWidth()
		var s_h=$('#fdj').outerHeight()
		$('.show-pic_M').mousemove(function(e){
			var evt=e||event;
			var x=evt.pageX;
			var y=evt.pageY;
			var _left=x-p_left-s_w/2
			var _top=y-p_top-s_h/2
			if(_left<=0){
				_left=0
			}
			if(_top<=0){
				_top=0
			}
			if(_left>=$('.show-pic_M').outerWidth()-s_w){
				_left=$('.show-pic_M').outerWidth()-s_w
			}
			if(_top>=$('.show-pic_M').outerHeight()-s_h){
				_top=$('.show-pic_M').outerHeight()-s_h
			}
			$('#fdj').css({left:_left+'px',
			top:_top+'px'})
			$('#img_B').css({left:-_left/$('.show-pic_M')
			.outerWidth()*$('#zoomDiv').outerWidth()+'px'})
			$('#img_B').css({top:-_top/$('.show-pic_M')
			.outerHeight()*$('#zoomDiv').outerHeight()+'px'})

		})
		$('.show-pic_M').mouseover(function(){
		$('#fdj').show()
		$('#zoomDiv').show()
		})
		$('.show-pic_M').mouseout(function(){
		$('#fdj').hide()
		$('#zoomDiv').hide()
		})
////////放大镜移动事件end
////////获取商品信息start
		var id=location.search.split("=")[1];
		console.log(id)
		$.get('http://47.104.244.134:8080/goodsbyid.do',{id:id}).done(data=>{
			var str=`<li>
								<h1>${data.name}</h1>
							</li>
							<li>
								<i>单价</i>
								<p>${data.price}</p>
							</li>
							<li class="num_li1">
								<i>数量</i>
								<span id="jian">-</span>
								<input type='text' id='num' value='1'/>
								<span id="plus">+</span>
							</li>
							<li>
								<i>总价</i>
								<p class="sumprice">999</p>
							</li>
							<li id="btn_Li">
								<input type="button" id="addBtn111" value="加入购物车"/>
							</li>`
							$('.jiuji_ul').html(str)
					var str1=`<img class="img_M" src="${data.picurl}"/>`
					$('.show-pic_M').prepend(str1)
					var str2=`<img id="img_B" src="${data.picurl}"/>`
					$('#zoomDiv').html(str2)
					////////获取商品信息end
					///////添加物品置购物车start
					$('.sumprice').text(data.price);
					$('#num').change(function(){
						var val=$(this).val();
						var sp=data.price*val
						$('.sumprice').text(sp)
					$('#plus').click(function(){
						val=parseInt(val)
						val+=1
						var sp=data.price*val
						$('.sumprice').text(sp)
						$('#num').val(val)
						$('.sumprice').val(data.price*val)
					})
					$('#jian').click(function(){
						
						if(val<=1){
						$('#num').val(1)
						$('.sumprice').text(data.price)
						}else{
							val-=1
							var sp=data.price*val
							$('#num').val(val)
							$('.sumprice').text(sp)
						}
						
					})
						
					})
					var val=$('#num').val();
						$('#plus').click(function(){
						val=parseInt(val)
						val+=1
						var sp=data.price*val
						$('.sumprice').text(sp)
						$('#num').val(val)
						$('.sumprice').val(data.price*val)
					})
					$('#jian').click(function(){
						
						if(val<=1){
						$('#num').val(1)
						$('.sumprice').text(data.price)
						}else{
							val-=1
							var sp=data.price*val
							$('#num').val(val)
							$('.sumprice').text(sp)
						}
						
					})
					$('#addBtn111').click(function(){
						var val=$('#num').val()
						if($.cookie('token')){
					$.get("http://47.104.244.134:8080/cartsave.do",
					{gid:id,token:$.cookie('token')})
					.done(data=>{
						console.log(data)
						if(data.code==0){
							alert('添加成功')
						}else{
							alert('添加失败')
						}
					})
					}else{
						alert("请登录账号")
					}
						for(var i=1;i<val;i++){
							$.get("http://47.104.244.134:8080/cartsave.do",
					{gid:id,token:$.cookie('token')})
					.done(data=>{})
						}
					})
					
				})
		///////添加物品置购物车end
})