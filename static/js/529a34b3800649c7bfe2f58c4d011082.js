
 
var username="";
var userid="";
var login_html="";


login_html="<a href=\"https://www.qinggl.com/\" >首页</a> <a href=\"https://www.qinglm.com/user/denglu/?url="+document.URL+"\" >登录</a>";
document.getElementById("login").innerHTML=login_html;



if(document.getElementsByTagName('meta')['attribute']){
	var attr=document.getElementsByTagName('meta')['attribute'].getAttribute('content');
   document.write("<scr"+"ipt src='https://www.qinglm.com/ajax/data/visited/?attr="+attr+"'><\/scr"+"ipt>");
}

const u = navigator.userAgent,
qlapp = u.indexOf('QingLue') > -1 ;
if(qlapp){
var style = document.createElement("style");
style.type = "text/css";
css=".qlapp{ display:none}";
style.appendChild(document.createTextNode(css));
var head = document.getElementsByTagName("head")[0];
head.appendChild(style);
}