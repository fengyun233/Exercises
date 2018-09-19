$(function(){

	$('.content_two_img_ul').find('.xiala').hover(function(event){

		$('.zi_dong').eq($(this).index()).stop().animate({'top':70,'opacity':'1'},1000);
//		
//		要加.stop() 因为每一次执行 都要执行完 在停止

	},function(){
		$('.zi_dong').eq($(this).index()).stop().animate({'top':25,'opacity':'0'},400);
	});




	$('.content_two_img_ul').find('.xiala1').hover(function(event){

		$('.zi_dong').eq($(this).index()+3).stop().animate({'top':70,'opacity':'1'},400);

	},function(){
		$('.zi_dong').eq($(this).index()+3).stop().animate({'top':25,'opacity':'0'},400);
	});
	
	
//	轮播小图
//$('.lunbo_small_img_ul').get(0).innerHTML+=$('.lunbo_small_img_ul').get(0).innerHTML;
//$('.lunbo_small_img_ul').css({'width':$('.lunbo_small_img_ul').width()*2})
//var now1=0;
//	$('#btn1').click(function(){
////		clearInterval(timer1);
////		$('.lunbo_small_img_ul').find('li').length
//		if(now1==5)
//		{   
//			now1=1;
//			$('.lunbo_small_img_ul').css({'left':'0'})
//			
//		}else
//		{
//			now1++;
//		};
//	//			var a=$('.lunbo_small_img_ul').css('left');
////			alert(parseInt(a))
//		if(parseInt($('.lunbo_small_img_ul').css('left'))<=-$('.lunbo_small_img_ul').width()/2)
//		{
//			$('.lunbo_small_img_ul').css({'left':'0'})
//		}else{
//			$('.lunbo_small_img_ul').stop().animate({'left':-190*now1},1000);
//		}
//
//			
//		});
//		
//		
//		
//	$('#btn2').click(function(){
//	if(now1==5)
//		{   
//			now1=1;
//			$('.lunbo_small_img_ul').css({'left':'0'})
//			
//		}else
//		{
//			now1++;
//		};
//	//			var a=$('.lunbo_small_img_ul').css('left');
////			alert(parseInt(a))
//		if(parseInt($('.lunbo_small_img_ul').css('left'))<=-$('.lunbo_small_img_ul').width()/2)
//		{
//			$('.lunbo_small_img_ul').css({'left':'0'})
//		}else{
//			$('.lunbo_small_img_ul').stop().animate({'left':-190*now1},1000);
//		}
//
//			
//		});
//		function ansition(){
//			if(now1==5)
//		{   
//			now1=1;
//			$('.lunbo_small_img_ul').css({'left':'0'})
//			
//		}else
//		{
//			now1++;
//		};
//	//			var a=$('.lunbo_small_img_ul').css('left');
////			alert(parseInt(a))
//		if(parseInt($('.lunbo_small_img_ul').css('left'))<=-$('.lunbo_small_img_ul').width()/2)
//		{
//			$('.lunbo_small_img_ul').css({'left':'0'})
//		}else{
//			$('.lunbo_small_img_ul').stop().animate({'left':-190*now1},1000);
//		}
//		}
//		clearInterval(timer1);
//		var timer1=setInterval(ansition,2000);
//		
//		$('.lunbo_small_img_ul').mouseover(function(){
//				clearInterval(timer1);
//		});
//		
//		$('.lunbo_small_img_ul').mouseout(function(){
//					var timer1=setInterval(ansition,2000);
//		});
		
})
