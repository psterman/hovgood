var qinglm_google_view=0;

var ads = {};

ads['baidu_m_20_5']=("<scr"+"ipt  async type=\'text/javascr"+"ipt\' src=\'//bdcode.qinglm.com/common/ez_rii/resource/vh/production/ai.js\'></scr"+"ipt>");
ads['baidu_m_20_3']=("<scr"+"ipt async type=\'text/javascr"+"ipt\' src=\'//bdcode.qinglm.com/common/vvt9.js?u=peehlhye\'></scr"+"ipt>");

ads['baidu_640_90']=("<scr"+"ipt async type=\'text/javascr"+"ipt\' src=\'//bdcode.qinglm.com/production/v6z3s.js?pkzcl=jmmc\'></scr"+"ipt>");
ads['baidu_640_60']=("<scr"+"ipt async type=\'text/javascr"+"ipt\' src=\'//bdcode.qinglm.com/common/nih/openjs/hr/common/qo/production/k_f.js\'></scr"+"ipt>");
ads['baidu_960_90']=("<scr"+"ipt  async type=\'text/javascr"+"ipt\' src=\'//bdcode.qinglm.com/hcullduddfjzb.js\'></scr"+"ipt>");
ads['baidu_728_90']=("<scr"+"ipt async type=\'text/javascr"+"ipt\' src=\'//bdcode.qinglm.com/ezriiarbrcgorvwy.js\'></scr"+"ipt>");
ads['baidu_250_250']=("<scr"+"ipt type=\'text/javascr"+"ipt\' src=\'//bdcode.qinglm.com/production/js/o53x.js?av=neewubr\'></scr"+"ipt>");

function getAD(PARAMS) { 
	var sum=0;
	for(var key in PARAMS){
	sum+=PARAMS[key];
	}
	var low=0;
	var height=0;
	var r=parseInt(Math.random()*sum);
	
	for(var key in PARAMS){
		height=low+PARAMS[key];
		if(low <= r && r < height){ 
			document.writeln(ads[key]);
		}
		low+=PARAMS[key];
	}
}

function qlm_640(){
		if($.isPC()){
			if(window.location.protocol=="http:"){
				 getAD({baidu_640_90:6,baidu_640_60:6});
			}else{
				getAD({baidu_640_90:6,baidu_640_60:6});
			}
		}else {
			getAD({baidu_m_20_5:2});	
		}
}

function qlm_top(){
	 if($.isPC()){
			if($(window).width()>960){
				//960
				if(window.location.protocol=="http:"){
					getAD({ baidu_960_90:12}); 
				}else{
					getAD({ baidu_960_90:3}); 
				}
				
			} else if($(window).width()>728){
				//728
				getAD({baidu_728_90:1});
			} else {
				//640 
				if(window.location.protocol=="http:"){
					getAD({baidu_640_90:12});
				}else{
					getAD({baidu_640_90:1});
				}
			}
	}
}

function qlm_banner(){
	if($.isPC()){
 		if($(window).width()>960){
				//960
				if(window.location.protocol=="http:"){
					getAD({baidu_960_90:12}); 
				}else{
					getAD({baidu_960_90:1}); 
				}
				
			} else if($(window).width()>728){
				//728
				getAD({baidu_728_90:1});
			} else {
				//640 
				if(window.location.protocol=="http:"){
					getAD({baidu_640_90:6,baidu_640_60:6});
				}else{
					getAD({baidu_640_90:6,baidu_640_60:6});
				}
			}
	 }else{
		 qlm_640();
	}
}

function qlm_feeds( show){
if(show==undefined||($.isPC()&&show==="pc")){
	document.writeln("<div class=\"cpu-feeds-block\" data-site-id=\"275003125\" data-block-id=\"25459\"></div>");
	(function(){var url="//cpu.baidu.com";var getEntry=function(){var script=document.createElement("script");script.id="cpu-block-entry";script.src=url+"/js/cb.js";var scriptTag=document.getElementsByTagName("script")[0];scriptTag.parentNode.insertBefore(script,scriptTag)};var sentMsg=function(e){var msg={msg:e.toString()||"no err msg",line:e.lineno||-1};var img=document.createElement("img");img.src=url+"/msg?m=block&e="+encodeURIComponent(JSON.stringify(msg))};try{window.feedsbycpu=window.feedsbycpu||[];window.feedsbycpu.push({siteId:"275003125",blockId:"25459",display:"auto"});document.getElementById("cpu-block-entry")||getEntry()}catch(e){sentMsg(e)}})();
 } 
}

function qlm_250s(){

	if($.isPC()){
		document.writeln(" <div  id=\"qlm_250s\" style=\"width: 100%;  \">");
		document.writeln(" <div   class=\"qlm_250s_item\" style=\"text-align:center; margin-bottom:20px;  display: inline-block; font-size:0;  *display: inline; zoom: 1; \" >");
		
		if(window.location.protocol=="http:"){
			getAD({baidu_250_250:6});
		}else{
			getAD({baidu_250_250:1});
		}
		
		document.writeln("</div><div   class=\"qlm_250s_item\"  style=\"text-align:center; margin-bottom:20px; display: inline-block; font-size:0;  *display: inline; zoom: 1;\">");
		
		
		if(window.location.protocol=="http:"){
			getAD({baidu_250_250:4});
		}else{
			getAD({baidu_250_250:1})
		}
							
		document.writeln("</div>");
		document.writeln("</div>");

		function qlm_250s_size(){ 
 			var qlm_250s_w=$("#qlm_250s").width();
		
			if(qlm_250s_w>540){
			$("#qlm_250s .qlm_250s_item").width(qlm_250s_w/2-0.9);
			}else{
			$("#qlm_250s .qlm_250s_item").width(qlm_250s_w);
			}
		}
		
		qlm_250s_size();
		setTimeout(qlm_250s_size ,3000)
		$(window).resize(qlm_250s_size);
	
		}else{
			qlm_640();
		}
}


function qlm_160s(){

		if($.isPC()){
		
			document.writeln(" <div  id=\"qlm_160size\" style=\"width: 100%;   height:0;  \"></div>");
			var qlm_160s_w=$("#qlm_160size").width();
		
			if(qlm_160s_w>250){
				qlm_250s();
			}else{
				document.writeln(" <div  id=\"qlm_160s\" style=\"width: 100%;   text-align:center; margin:20px 0;  display: inline-block;   *display: inline; zoom: 1; \">");
				var r=parseInt(Math.random()*2);
				document.writeln("<scr"+"ipt type=\'text/javascr"+"ipt\' src=\'//bdcode.qinglm.com/production/xskbb/openjs/u/common/p_y/source/h.js\'></scr"+"ipt>");
				document.writeln("</div>");
			}
			
		}else{
			document.writeln(" <div  id=\"qlm_160s\" style=\"width: 100%;   text-align:center; margin:20px 0;  display: inline-block;   *display: inline; zoom: 1; \">");
			qlm_640();
			document.writeln("</div>");
		}
}

function 	qlm_xuanfu(){
	if($.isPC()){
		//document.writeln("<scr"+"ipt type=\'text/javascr"+"ipt\' src=\'//www.qinglm.com/union/alliance/qinggl/xuanfu.jsp\'></scr"+"ipt>");
	}else{
	 	document.writeln("<scr"+"ipt type=\'text/javascr"+"ipt\' src=\'//bdcode.qinglm.com/mhzqiigjw.js\'></scr"+"ipt>");
	}
} 