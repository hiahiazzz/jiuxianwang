		////调接口取数据
		$.getJSON("http://47.104.244.134:8080/goodsbytid.do",{tid:13,page:1
			,limit:5}).done(data=>{
				console.log(data)
				var data=data.data
					var str=""
				for(var i=1;i<data.length;i++){
				str+=`<li>
				<a href="detail.html?id=${data[i].id}">
				<img src="${data[i].picurl}"/>
				</a>
				<p id="first_p">${data[i].name}</p>
				<p id="second_p">${data[i].price}</p>
				<input type='button' class="addBtn" data-id="${data[i].id}" value="添加购物车"/>
				</li>`
			}
				$('#superList').html(str)

				$('.addBtn').click(function(){
					var id=$(this).attr('data-id')
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
					
					
				})
			})
		