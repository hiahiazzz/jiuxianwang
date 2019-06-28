$(function(){
	////////////////展示购物车列表详情start
	$.get("http://47.104.244.134:8080/cartlist.do",{token:$.cookie('token')})
				.done(data=>{
					console.log(data)
					var str='';
					console.log(data[0].goods.id)
					for(var i=0;i<data.length;i++){
						str+=`<li data-id='${data[i].goods.id}'>
						<input type='checkbox' class='chk'/>
						<img class="cart_img" src="${data[i].goods.picurl}"/>
						<span>${data[i].goods.name}</span>
						<span class="price" style="color:red">${data[i].goods.price}</span>
						<span class="glyphicon glyphicon-minus jian"></span>
						<input type='text' class="num" value='${data[i].count}'/>
						<span class="glyphicon glyphicon-plus plus"></span>
						<span class='preprice' style="color:red"></span>
						<input type='button' data-gid="${data[i].gid}" class="del" id='btn' value="删除"/>
						</li>`
					}
					$('#cartList').html(str)
					$('#cartList li').map(function(a,b){
						$(b).find('.preprice').text()
						$(b).find('.plus').click(function(){
							console.log('a')
						})
					
							
						
					})
					////////////////展示购物车列表详情end
					////////////////提交准备start

					//=========================================
				})
	
					
})
