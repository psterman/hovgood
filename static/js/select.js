function SelectShowHide(){
	$(".select-input").click(function(){
		if($('.select-ul').css('display')=='none'){
	  		$(".select-ul").slideDown(400);
		}else{
			$(".select-ul").slideUp(400);
		}
	   });

	  $(".select-input").blur(function(){
	   	setTimeout(function(){$(".select-ul").slideUp(400)},150);
	  });
}
 function SelectOne(){
	  this.select_one_cookieid="";
	  SelectShowHide();
	  SelectOne.select= function (obj ,cookie){
	  	obj=$(obj);
	  	select_one_cookieid=cookie;
	  	$(".select-input").val(obj.text());
	  	
	  	if(obj.text().length>3){
	  		$(".select-input").removeClass("center");
	  	}else{
	  		$(".select-input").addClass("center");
	  	}
	  	 $(".tid").val(obj.attr("tid"));
	  	 	if(obj.attr("tid")!=0){
	  	 		$(".target").val("1");
	  		 }else{
	  			 $(".target").val("0");
	  		 }
	  	 if(cookie.length>0){
  	 	  $.cookie(cookie, obj.attr("tid") , {
  	            expires: 30
  	        });
	  	}
	  }
	  this.select=SelectOne.select;
	  $(".select-ul a").click(function (){
		  SelectOne.select($(this),select_one_cookieid);
	   });

	  this.Load= function (cookieid){
	  	 select_one_cookieid=cookieid;
	  	  var tid = $.cookie( select_one_cookieid);
	  		var first;
	  	  if($(".select-ul a[tid="+tid+"]").length>0){
	  		  first=$(".select-ul a[tid="+tid+"]");
	  	  }else{
	  		  first=$(".select-ul").find("a").get(0);
	  	  } 
	  	SelectOne.select(first,select_one_cookieid);
	   }
	}

 function SelectMore(query){
		var selects;
		SelectMore.cselect= function(obj){
			$(".select_box").remove();
	 		selects=$(obj);//获取select
		 	this.createSelect(selects);
		}

		SelectMore.createSelect= function (select_container){

			//创建select容器，class为select_box，插入到select标签前
			var tag_select=$('<div></div>');//div相当于select标签
			tag_select.attr('class','select_box');
		
			tag_select.insertBefore(select_container);

			//显示框class为select_showbox,插入到创建的tag_select中
			var select_showbox=$('<div></div>');//显示框
			select_showbox.css('cursor','pointer').attr('class','select_showbox').appendTo(tag_select);
	 
			//创建option容器，class为select_option，插入到创建的tag_select中
			var ul_option=$('<ul></ul>');//创建option列表
			ul_option.attr('class','select_option');
			ul_option.appendTo(tag_select);

			this.createOptions(ul_option);//创建option
		 
			select_showbox.click(function(){
			//点击显示框
			if(ul_option.is(":hidden")){
				ul_option.show();
				ul_option.parent().find(".select_showbox").addClass("active");
			}else{
				ul_option.hide();
				ul_option.parent().find(".select_showbox").removeClass("active");
			}

			$(document).click(function(event){
				if(!select_showbox.is(event.target) && select_showbox.has(event.target).length === 0){ 
					ul_option.hide();
					ul_option.parent().find(".select_showbox").removeClass("active");
				}
		   });
		 });
			
			var li_option=ul_option.find('li');
	 
			li_option.on('click',function(){
				$(this).addClass('selected').siblings().removeClass('selected');
				var value=$(this).text();
				var vid=$(this).attr('tid');
				$('#tid').attr("value",vid);
				select_showbox.text(value);
				$(this).parent().parent().find(".select_showbox").removeClass("active");
				$(this).parent().hide();
			
			});

			li_option.hover(function(){
				$(this).addClass('hover').siblings().removeClass('hover');	
			},function(){
				li_option.removeClass('hover');
			});
		 
		}

		SelectMore.createOptions=function(ul_list){
			//获取被选中的元素并将其值赋值到显示框中
			var options=selects.find('option'),
				selected_option=options.filter(':selected'),
				selected_index=selected_option.index(),
				showbox=ul_list.prev();
				showbox.text(selected_option.text());
				var vid=selected_option.val();

				$('#tid').val(vid);
			//为每个option建立个li并赋值
			for(var n=0;n<options.length;n++){
				var tag_option=$('<li></li>'),//li相当于option
					txt_option=options.eq(n).text();
				tag_option.text(txt_option).appendTo(ul_list);
				tag_option.attr('tid',options.eq(n).val());
				//为被选中的元素添加class为selected
				if(n==selected_index){
					tag_option.attr('class','selected');
				}
			}
		}

		SelectMore.cselect(query);

		 $('.searchnav li').click(function(){
			 $('.searchnav li').removeClass("hover");
			 $(this).addClass('hover').siblings().removeClass('hover');
			 $('#stype').attr("value",$(this).attr("_type"));
			 SelectMore.cselect(query+$(this).attr("_type"));
		}); 
	} 
 
//分类搜索
 function SelectObject(){
	    this.select_one_cookieid="";
		SelectShowHide();
	    SelectObject.select= function (obj ,cookie){
	      obj=$(obj);
	      select_one_cookieid=cookie;
	      $(".select-input").val(obj.text());
	      
	      if(obj.text().length>3){
	        $(".select-input").removeClass("center");
	      }else{
	        $(".select-input").addClass("center");
	      }
	       $(".searchtype").val(obj.attr("type"));
	   
	       if(cookie.length>0){
	        $.cookie(cookie, obj.attr("type") , {
	                expires: 30
	            });
	      }
	    }

		this.select=SelectObject.select;

	    $(".select-ul a").click(function (){
			SelectObject.select($(this),select_one_cookieid);
	     });

	    this.Load= function (cookieid){
	       select_one_cookieid=cookieid;
	        var type = $.cookie( select_one_cookieid);
	        var first;
	        if($(".select-ul a[type="+type+"]").length>0){
	          first=$(".select-ul a[type="+type+"]");
	        }else{
	          first=$(".select-ul").find("a").get(0);
	        } 
			SelectObject.select(first,select_one_cookieid);
	     }
}
 