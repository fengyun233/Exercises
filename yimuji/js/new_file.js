$(function(){
	// $('.WL_2').slideDown();
	// 		$('.bianhuan_img').attr('src','img/xiangs.png')
	// $('.WL_2').slideUp();
	$('.W_3_img_xiangsahng').click(function(){

		if($('.WL_2').css('display')=='block')
		{
			$('.WL_2').slideUp();
			$('.W_3_zhong_img').css('display','none');
			setTimeout(function(){
				$('.W_3_zhong_img').css('display','block');
				$('.bianhuan_img').attr('src','img/xiangxia.png')
			},500)
			// setTimeout(function(){
			// 	$('.bianhuan_img').attr('src','img/xiangxia.png')
			// },400)
			
		}else{
			$('.WL_2').slideDown();
			$('.W_3_zhong_img').css('display','none');
			// $('.bianhuan_img').attr('src','img/xiangs.png')
			setTimeout(function(){
				$('.W_3_zhong_img').css('display','block');
				$('.bianhuan_img').attr('src','img/xiangs.png')
			},500)
			
		}
	});
	
	var now;
	$('.W_1').find('span').click(function(){
		
		$('.W_1').find('span').attr('class','')
		$(this).attr('class','active');
		$('.dui_bian').attr('src','img/dui2.png');
		now=$('span[class=active]').length;

		if (now>9) {
			$('.zijin_block').css('background','url(img/zijin.png)')
		}
		return now;
	});
	





	$('.W_2').find('span').click(function(){
		$('.W_2').find('span').attr('class','');
		$(this).attr('class','active');
		$('.dui_bian1').attr('src','img/dui2.png');
		// alert($('span[class=active]').size());
		// 
		now=$('span[class=active]').length;

		if (now>9) {
			$('.zijin_block').css('background','url(img/zijin.png)')
		}
		return now;
	});

	$('.buyiyang').find('span').click(function(){
		$('.buyiyang').find('span').attr('class','')
		$(this).attr('class','active');
		$('.dui_bian2').attr('src','img/dui2.png');

		now=$('span[class=active]').length;

		if (now>9) {
			$('.zijin_block').css('background','url(img/zijin.png)')
		}
		return now;
	});
	
	$('.W_4').find('span').click(function(){
		$('.W_4').find('span').attr('class','')
		$(this).attr('class','active');
		$('.dui_bian3').attr('src','img/dui2.png');

		now=$('span[class=active]').length;

		if (now>9) {
			$('.zijin_block').css('background','url(img/zijin.png)')
		}
		return now;
	});
	
	// 第五个
	// $('.W_5').find('input2').click(function(){
	// 	$('.W_5').find('input2').attr('class','')
	// 	$(this).attr('class','active');
	// 	$('.dui_bian4').attr('src','img/dui2.png');

	// 	now=$('span[class=active]').length;

	// 	if (now>4) {
	// 		$('.zijin_block').css('background','url(img/zijin.png)')
	// 	}

	// 	return now;
	
	// });
	

	$('.input2').click(function(){
// $('.jiji').attr('class','active');
		var oValue=parseInt($('.input1').val());
		// alert(oValue)
		if ($('.input1').val()==''){
			alert('请输入数字');

			// $('.jiji').attr('class','');

		// 	now=$('span[class=active]').length;

		// if (now>5) {
		// 	$('.zijin_block').css('background','url(img/zijin.png)')
		// }

		// return now;

		}else if(oValue<100||oValue>1000){
			
			alert('请填写100万到1000万范围内的数值！')

			// $('.jiji').attr('class','');
			now=$('span[class=active]').length;

		// if (now>5) {
		// 	$('.zijin_block').css('background','url(img/zijin.png)')
		// }

		return now;

		}else if(oValue>100&&oValue<1000){
		
			// $('.input_b').css('margin-left','60px')
			$('.dui_bian4').attr('src','img/dui2.png');
			$('.input1,.input2').hide();
			$('.W_b').show();
			$('.W_b').html(oValue)
			$('.W_5_i').show();


			$('.jiji').attr('class','active');
			
				now=$('span[class=active]').length;

			if (now>9) {
				$('.zijin_block').css('background','url(img/zijin.png)')
			}

			return now;

		
			
		};
		now=$('span[class=active]').length;

		if (now>9) {
			$('.zijin_block').css('background','url(img/zijin.png)')
		}

		return now;
	})


	$('.W_5_i').click(function(){
		// $('.jiji').attr('class','');
		$('.dui_bian4').attr('src','img/dui1.png');
		$('.input1,.input2').show();
		$('.W_b').hide();
		$('.W_5_i').hide();
		// $('.jiji').attr('class','active');
		// $('.W_b').show();
		now=$('span[class=active]').length;
		
		$('.zijin_block').css('background','url(img/zijin1.png)')

	})







	$('.W_6').find('span').click(function(){
		$('.W_6').find('span').attr('class','')
		$(this).attr('class','active');
		now=$('span[class=active]').length;
		
		$('.dui_bian5').attr('src','img/dui2.png');	

		if (now>9) {
			$('.zijin_block').css('background','url(img/zijin.png)')
		}
		
		 return now;
	});
	

	$('.WL').find('span').click(function(){
		$('.WL').find('span').attr('class','')
		$(this).attr('class','active');
		/*$('.dui_bian6').attr('src','img/dui2.png');*/
	});
	
	$('.WL1').find('span').click(function(){
		$('.WL1').find('span').attr('class','')
		$(this).attr('class','active');
		// $('.dui_bian7').attr('src','img/dui2.png');
	});
	
	
	$('.WL2').find('span').click(function(){
		$('.WL2').find('span').attr('class','')
		$(this).attr('class','active');
		// $('.dui_bian8').attr('src','img/dui2.png');
	});

	$('.WL3').find('span').click(function(){
		$('.WL3').find('span').attr('class','')
		$(this).attr('class','active');
		// $('.dui_bian9').attr('src','img/dui2.png');
	});
	
// alert($('.yz_biaod_zhong').find('span').hasClass('active').length)



	// if ($('.yz_biaod_zhong').find('span').hasClass('active').length>=5)
	//  {alert(1)}
	
	$(window).scroll(function(){
		if($(this).scrollTop()>400){
			$('.huanhuidingbu').fadeIn(800);
		}else{
			$('.huanhuidingbu').fadeOut(800);
		}
		$('.huanhuidingbu').click(function(){
			$('html,body').stop().animate({'scrollTop':0},2000)
		})
		
		
	});
	
	
	
	$('.nav_qiehuan_div1').find('li').click(function(){
//		alert(1)

		$('.nav_qiehuan_div1').find('a').attr('class','')
		$('.nav_qiehuan_div1').find('a').eq($(this).index()).attr('class','activv');
		$('.nav_qiehuan_div1').find('li').attr('class','')
		$(this).attr('class','active1')
		
		$('.zuiwai').css('display','none');
		$('.zuiwai').eq($(this).index()).css('display','block');
	})
	
	
//	alert(1)
	
	
	
	
	
	
	
	
	
})


//	if($(this).scrollTop()>400)
//		{
//			
//			$('.car_6').fadeIn(800);
//		}else{
//			$('.car_6').fadeOut(800);
//		};
//		
//		$('.car_6').click(function(){
//		$('html,body').stop().animate({'scrollTop':0},1200)
//	});