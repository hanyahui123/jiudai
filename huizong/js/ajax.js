//{type:"",url:"",data:{key1:value1,key2:value2},success:"",error:""}
//key1=value1&key2=value2
function ajax(obj){
	if(window.XMLHttpRequest){
		var xhr = new XMLHttpRequest();
	}else{
		var xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}
	var str = "";
	for(var i in obj.data){
		str = str + i + "=" + obj.data[i] + "&";
	}
	str = str.replace(/&$/,"");
	
	if(obj.type.toUpperCase()=="GET"){
		if(str==""){
			xhr.open("GET",obj.url,true);
		}else{
			xhr.open("GET",obj.url+"?"+str,true);
		}
		xhr.send();
	}
	if(obj.type.toUpperCase()=="POST"){
		xhr.open("POST",obj.url,true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send(str);
	}
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4){
			if(xhr.status==200){
				var data = xhr.responseText;
				obj.success(data);
			}else{
				obj.error(data);
			}
		}
	}
	
}
