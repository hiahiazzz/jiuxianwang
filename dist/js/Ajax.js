function ajax(url, fnSuccess) {
	if(window.XMLHttpRequest) {
		var xhr = new XMLHttpRequest();
	} else {
		var xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhr.open("GET", url, true);
	xhr.send();
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4) {
			if(xhr.status == 200) {
				var data = xhr.responseText;
				//对数据的处理
				fnSuccess(data);
			}
		}
	}
}