$(function(){
	/*判断动画兼容*/
	if(!/msie [6|7|8|9]/i.test(navigator.userAgent)){
		var wow = new WOW({
			boxClass: 'wow',
			animateClass: 'animated',
			offset: 0,
			mobile: true,
			live: true
		});
		wow.init();				
	}
	/*为什么学-whyLearn*/
	$('.whyLearn_bottom img').eq(0).show();
	$('.whyLearn_content li').mouseover(function(event) {
		/* Act on the event */
		var index = $(this).index();
		$(this).addClass('whyLearn_content_opt').siblings().removeClass('whyLearn_content_opt');
		$('.whyLearn_bottom img').eq(index).fadeIn().siblings().fadeOut();
	})
	/*返回顶部按钮-rightBtn*/
	var rightBtnAr = $('#rightBtn');
	$(document).scroll(function(){
		var oscrollHeight = $(document).scrollTop();
		//document.title = oscrollHeight;
		if(oscrollHeight>500){
			rightBtnAr.fadeIn();
		}else{
			rightBtnAr.fadeOut();
		}
	})
	rightBtnAr.find('.goTop').click(function(){
		//alert('hello');
		$("body").animate({"scrollTop":0},1000)
	})
	/*为何学-塔tower*/		
	$(document).live('scroll',function(){
		var sHeight = $(document).scrollTop();
		var towerH = $('.tower')
		if(sHeight>$('.tower').offset().top-towerH.height()){			
			$('.tower .tower_left1').animate({width:400}, 800,function(){
				$('.tower .tower_left1').find('img').animate({opacity:1},800)
			})
			$('.tower .tower_right1').delay(1500).animate({width:400}, 800,function(){
				$('.tower .tower_right1').delay(1500).find('img').animate({opacity:1},800)
			})
			$('.tower .tower_left2').delay(2500).animate({width:400}, 800,function(){
				$('.tower .tower_left2').delay(2500).find('img').animate({opacity:1},800)
			})
			$('.tower .tower_right2').delay(3700).animate({width:400}, 800,function(){
				$('.tower .tower_right2').delay(3700).find('img').animate({opacity:1},800)
			})
		}
	})
	/*作品展示 轮播*/
	var pos = [
		{left:0,top:80,width:600,height:330,opacity:0,z:1},
		{left:0,top:80,width:600,height:330,opacity:0,z:2},
		{left:0,top:80,width:600,height:330,opacity:0,z:3},
		{left:0,top:80,width:600,height:330,opacity:0.8,z:4},
		{left:200,top:0,width:800,height:500,opacity:1,z:5},
		{left:600,top:80,width:600,height:330,opacity:0.8,z:4},
		{left:600,top:80,width:600,height:330,opacity:0,z:3},
		{left:600,top:80,width:600,height:330,opacity:0,z:2},
		{left:600,top:80,width:600,height:330,opacity:0,z:1},
	];
	var parentPic = $('.products-bd');
	var oLis = parentPic.find('li');
	$.each(oLis, function(index, val) {
		 /* iterate through array or object */
		 oLis.eq(index).css('zIndex',pos[index].z).animate(pos[index], 500)
	})
	/*切换图片*/
	$('.prev').click(function(event) {
		/* Act on the event */
		changePic(true);
		return false;
	})
	$('.next').click(function(event) {
		/* Act on the event */
		changePic(false);
		return false;
	})
	function changePic(flag){
		if(flag){
			pos.unshift(pos.pop());
		}else{
			pos.push(pos.shift());
		}
		$.each(oLis, function(index, val) {
			 /* iterate through array or object */
			 oLis.eq(index).css('zIndex',pos[index].z).stop().animate(pos[index], 500)
		})
	}
	var timer = null;
	timer = setInterval(function(){
		changePic(false);
	}, 2000)
	parentPic.mousemove(function(event) {
		/* Act on the event */
		clearInterval(timer);
	}).mouseout(function(event) {
		/* Act on the event */
		timer = setInterval(function(){
			changePic(false);
		}, 2000)
	});
	/*能学会吗 学院信息*/
	var oTable = $('.understand_table_ct');
	var oUl = oTable.find('ul');
	function TOP (){
		oUl.animate({top:-43}, 900,function(){
			oUl.find('li:first').appendTo(oUl);
			oUl.css('top',0);
		})
	}
	var timerAr = setInterval(TOP,1200)
	oUl.mouseover(function(event) {
		/* Act on the event */
		clearInterval(timerAr)
	}).mouseout(function(event) {
		/* Act on the event */
		timerAr = setInterval(TOP,1200)
	});
})