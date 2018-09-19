window.onload=function(){
	var oW_nr1_div4=document.getElementsByClassName('W_nr1_div4')[0];
	var oSpanWidth=document.getElementsByClassName('W_nr1_div1_S1')[0];
	var oW_nr2_img2=document.getElementsByClassName('W_nr2_img2')[0];
	var ocontent=document.getElementsByClassName('content')[0];
	var oUL=document.getElementsByClassName('W_nr1_div2_ul')[0];
	var oli=oUL.getElementsByTagName('li');
	var oImg=oUL.getElementsByClassName('W_li_img');
	var oBottom_span=document.getElementsByClassName('nav_zhong_sp3')[0];
	var oW_jie=document.getElementsByClassName('W_jie');
	var opage=document.getElementsByClassName('page')[0];
	var oW_Tc1_chneng=document.getElementsByClassName('W_Tc1_chneng1')[0];
	var sound = new Howl({
	  src: ['Audio/2103.wav'],
	});
	var sound1 = new Howl({
	  src: ['Audio/no.wav'],
	});
//	sound1.play();
//	sound.pause()
	var a=0;	//	记录无根手指状态
	var ye=0;//页面显示 切换状态
	var b=0;//印章
	var c=0;//劵的数量
	var d=0;//图片的个数
	var index1=0;
	var index2=0;
	var attr=[]//存 节点的index；
//	$('.').click(function(){
//		alert(1)
//	})
	$('.W2_huode').css('margin-left',(-$('.W2_huode').width())/2);
	//on的indexs
	$('.W_nr1_div2_ul li').find('input').each(function(){
		index1=$('.W_nr1_div2_ul li').find('input').index(this);
			if($(this).data('ab')=='on')
			{
				index2=$(this).parent().index();
				$(this).next('.W2_jie').show() ;
				attr.push(index2);
				return attr;
			}
	});


   	 opage.addEventListener("touchstart",function(event)
  	 	{  
  	 		
//	 		if($('.W_Zz4').css('display')=='block')return;
//	 		if($('.W_Zz1').css('display')=='block')return;
	  	    if(event.touches.length==5){
	  	    	if($('.W_Zz4').css('display')=='block'){
//	  	    		alert(1)
	  	    		ye=0;
	  	    	};
//	  	    	if($('.W_Zz').css('display')=='none'){
//	  	    		ye=1;
//	  	    	}
	  	    	a=1;
	  	    	shouzhi=event.touches.length;
	  	  		var a1x=event.touches[0].pageX;
		  	  	var a1y=event.touches[0].pageY;
		  	  	var a2x=event.touches[1].pageX;
		  	  	var a2y=event.touches[1].pageY;
		  	  	var a3x=event.touches[2].pageX;
		  	  	var a3y=event.touches[2].pageY;
		  	  	var a4x=event.touches[3].pageX;
		  	  	var a4y=event.touches[3].pageY;
		  	  	var a5x=event.touches[4].pageX;
		  	  	var a5y=event.touches[4].pageY;
				var Z1=Math.sqrt(Math.pow(a2x-a1x,2)+Math.pow(a2y-a1y,2));
				var Z2=Math.sqrt(Math.pow(a2x-a3x,2)+Math.pow(a2y-a3y,2));
				var Z3=Math.sqrt(Math.pow(a3x-a4x,2)+Math.pow(a3y-a4y,2));
				var Z4=Math.sqrt(Math.pow(a4x-a5x,2)+Math.pow(a4y-a5y,2));
				var Z5=Math.sqrt(Math.pow(a5x-a1x,2)+Math.pow(a5y-a1y,2));
				TrueZ=Z1+Z2+Z3+Z4+Z5;

	 	};  
	 }); 
			//	 手指抬起		
			$(document).bind("touchend",function(event){
				if(event.touches.length==0){
					if(a==1){
						if(ye==0){
							$('.W_Zz3').hide();
							ye=9;
							if(TrueZ>=1100){
								ye=9;
								sound1.play();
								TanC('.W_Tc1_chneng2','.W_Zz1');
							}else{
								ye=9;
								sound.play();
								b++;
								TanC('.W_Tc1_chneng1','.W_Zz1');
								if(d>9){
									$('.W_li_img').attr('src','img/G2_nr2.png')
									d=0;
									oImg[d++].src='img/G2_nr1.png';	
								}else{
									oImg[d++].src='img/G2_nr1.png';
									for (i=0;i<=attr.length;i++) {
										if(d-1==attr[i])
										{
											$('.W2_huode span').find('i').text(++c);
										}
									}
								};
								$('.W_Tc1_s2_yin').find('span').text(b);	
								
							};
							
					}else if(ye==1){
							ye=9;
							if(TrueZ>=1100){
								ye=9;
								sound1.play();
								$('.W_Tc1_chneng3').hide();
								TanC('.W_Tc1_chneng2','.W_Zz2');
							}else{
								$('.W_Zz3').show();
								ye=9;
								sound.play();
								$('.W_Zz2,.W_Tc1_chneng2,.W_Tc1_chneng3').hide();
								if(b<=0){
									sound1.play();
									b=0;
									TanC('.W_Tc1_chneng2','.W_Zz2');
								}else{
									b--;
									TanC('.W_Tc1_chneng1','.W_Zz2');
								}
//								c的判断	
									
								if(d<=0){
									d=0;	
								}else{
									oImg[--d].src='img/G2_nr2.png';
									for (i=0;i<=attr.length;i++) {
										if(d==attr[i])
										{
											$('.W2_huode span').find('i').text(--c);
										}
									}
									if(b%10==0&&b!=0){
									d=10;
									$('.W_li_img').attr('src','img/G2_nr1.png')
									};
								};
								$('.W_Tc1_s2_yin').find('span').text(b);	
						};

						}
										$('.page').bind('click',function(){
										$('.W_Tc1_chneng2,.W_Zz2,.W_Tc1_chneng3,.W_Tc1_chneng1,.W_Zz1').hide();
										$('.W_Zz4').show();
								});	
						a=0;
					}
				}
				
				
				
				
			}) ;
	 	
	 	
//	 	取消集章
	 	$('.W_nr1_div3').bind('click',function(){
	 		TanC('.W_Tc1_chneng3','.W_Zz2');
			$('.W_Zz4').hide();
	 		ye=1;
	 		return false;
	 	});
	 	$('.W_Tc1_d1').bind('click',function(){
	 		$('.W_Zz2,.W_Tc1_chneng3').hide();
			$('.W_Zz4').show();
	 		ye=0;
	 		return false;
	 	});
	 	
	
	}
		//穿线弹窗的函数
	function TanC(obj1,obj2){
		$(obj2).show();
			$(obj1).show();
	    	var oW_Tc2_chnengleft=($(window).width()-$(obj1).width())/2;
			var oW_Tc2_chnengtop=($(window).height()-$(obj1).height())/2;
			$(obj1).css('left',oW_Tc2_chnengleft);
			$(obj1).css('top',oW_Tc2_chnengtop);

		
		var oload_containerleft=($(window).width()-$('.load-container').width())/2;
		var oload_containertop=($(window).height()-$('.load-container').height())/2;
		$('.load-container').css('left',oload_containerleft);
		$('.load-container').css('top',oload_containertop);
	};
	
	function TanCXS(){
		$('.W_Tc1_chneng1,.W_Zz,.W_Tc1_chneng2,.W_Tc1_chneng3,.W_Zz1,.W_Zz3').hide();
	};	
	
