window.onload=function(){
	var oW_nr1_div4=document.getElementsByClassName('W_nr1_div4')[0];
	var oSpanWidth=document.getElementsByClassName('W_nr1_div1_S1')[0];
	var oW_nr2_img2=document.getElementsByClassName('W_nr2_img2')[0];
	var ocontent=document.getElementsByClassName('content')[0];
	var oUL=document.getElementsByClassName('W_nr1_div2_ul')[0];
	var oli=oUL.getElementsByTagName('li');
	var oImg=oUL.getElementsByTagName('img');
	var oNow=0;
	var oBottom_span=document.getElementsByClassName('nav_zhong_sp3')[0];
	var oI=oBottom_span.getElementsByTagName('i')[0];
	var oW_jie=document.getElementsByClassName('W_jie');
	oW_nr1_div4.style.bottom=-oW_nr1_div4.clientHeight+6+'px';
	oSpanWidth.style.marginLeft=-(oSpanWidth.clientWidth)/2+'px';
	var opage=document.getElementsByClassName('page')[0];
	var a=0;
	var oW_Tc1_chneng=document.getElementsByClassName('W_Tc1_chneng1')[0];
	var b=0;
	var n=1;
	var c=0;
	var d=0
	var array=[];
	var ttStatus = 1;
	var objj=2;
	var jinzhi=0;
	var E=0;
	var ZC=0;
	var shouzhi=null;
	var T=0;
	var G=0;
	var H=0;
	var TrueZ;		
	var eee=0;
	var aaa=1;
	var yemian=1;
	var sound = new Howl({
	  src: ['Audio/2103.wav'],
	  
	});
	var sound1 = new Howl({
	  src: ['Audio/no.wav'],
	});
//	sound1.play();
//	sound.pause()
		$('.W_nr1_div3').click(function(){
			TanC('.W_Tc1_chneng3','.W_Zz3');
			yemian=2;
		});
		
//		$(document).bind('click',function(){
//			sound1.play();
//		})
   	 opage.addEventListener("touchstart",function(event)
  	 	{  
  	 
//	 		if($('.W_Zz4').css('display')=='block')return;
//	 		if($('.W_Zz1').css('display')=='block')return;
	  	    if(event.touches.length==5){
	  	    	eee=1;
	  	    	aaa=1;
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
				
				for(i=0;i<5;i++)
					if(event.touches[i].target.className=='W_nr1_div3'){
						alert('您点到取消了');
						yemian=2;
						
					}

	 	};  
	 }); 
//	 手指抬起		
			$(document).bind("touchend",function(event)
			  	 	{  
			  	 		if(event.touches.length==0){
			  	 		if(eee==1)
			  	 		if (aaa==1) 
			 			 { 

							if(yemian==2){
								yemian=99;
									if(TrueZ>=1100)
					 		 	{
					 		 		
					 		 		$('.W_Zz3,.W_Tc1_chneng3').hide();
					 		 		TanC('.W_Tc1_chneng2','.W_Zz1');
					 		 		sound1.play();
					 		 	}else{
//					 		 		alert(TrueZ)
					 		 		sound.play();
					 		 		
								if(a<=0){
			  	  					a=0;
			  	  					sound1.play();
			  	  					TanC('.W_Tc1_chneng2','.W_Zz1');
			  	  				}else{
			  	  					a--;	
			  	  					oImg[a].src='img/G_Yuan_hui.png';
			  	  					TanC('.W_Tc1_chneng1','.W_Zz1');
			  	  				}
								if(c<=0){
			  	  					c=0;
			  	  					$('.W_Tc1_s2_yin').find('span').text(c);
									$('.W_S_yin').text(c);
									$('.nav_zhong_sp3').find('i').text(c);
			  	  				}else{
			  	  					c--;
			  	  					$('.W_Tc1_s2_yin').find('span').text(c);
									$('.W_S_yin').text(c);
									if(c%10==0&&c!=0){
									a=10;
									$('.W_nr1_div2_ul li img').attr('src','img/G_Yuan.png');
									};
								 if(c%10==2||c%10==5||c%10==9){
						 			--E;
									$('.nav_zhong_sp3').find('i').text(E);
									}
			  	  				};
								$('.W_Zz3,.W_Tc1_chneng3').hide();	
					 		 }
			  	  	}else{
			  	  		if(yemian==1){
			  	  			yemian=99;
			  	  			if(TrueZ>=1100)	
			 		 	{	
			 		 		sound1.play();
			 		 		TanC('.W_Tc1_chneng2','.W_Zz1');
			 		 	}else{
			 		 		TanC('.W_Tc1_chneng1','.W_Zz1');
			 		 		c++;
			  	  			if(c%10==1&&c!=1){
								$('.W_nr1_div2_ul li img').attr('src','img/G_Yuan_hui.png');
							};
							 if(c%10%3==0&&c%10!=9||c%10==0){
							 	E++;
							$('.nav_zhong_sp3').find('i').text(E);}
			  	  			if(a>9){
								$('.W_nr1_div2_ul li img').attr('src','img/G_Yuan_hui.png');
								a=0;
								oImg[a++].src='img/G_Yuan.png';	
							}else{
									oImg[a++].src='img/G_Yuan.png';
								};
								$('.W_Tc1_s2_yin').find('span').text(c);
								$('.W_S_yin').text(c);		
			 		 			sound.play();
			  	  			}
			  	  		}
			  	  			
			  	  		}	
			  	  		aaa=0;
			 		 }
					}
			  	 	}) ;
	 	
			$('.W_Tc1_d1').click(function(){
				$('.W_tc,.W_Zz1').hide();
				
				yemian=1;
			});
			$('.W_Tc1_d_S').click(function(){
				
				$('.W_tc,.W_Zz1').hide();
				yemian=1;
			});		

			$('.W_Tc1_d3').click(function(){
				
				$('.W_Zz3,.W_tc').hide();
				yemian=1;
			});
	 //			点击劵
			$('.W_Bottom').bind('click',function(){
				
//				alert(T)
				setTimeout(function(){
					$('.swiper-container').show();
					$('.W_juan,.W_li').css('margin-top',-($('.W_juan').height())/2)
				},500)
				TanC('','.W_Zz4');
				yemian=99;
			});
			
			$('.W_juan_img1').click(function(){
				$('.swiper-container,.W_Zz4').hide();
				yemian=1;
//				alert(1)
			});		
	}
		//穿线弹窗的函数
	function TanC(obj1,obj2){
		$(obj2).show();
//		$('.W_Zz').show();
		$('.load-container').show();
		setTimeout(function(){
			$('.load-container').hide();
			$(obj1).show();
	    	var oW_Tc2_chnengleft=($(window).width()-$(obj1).width())/2;
			var oW_Tc2_chnengtop=($(window).height()-$(obj1).height())/2;
			$(obj1).css('left',oW_Tc2_chnengleft);
			$(obj1).css('top',oW_Tc2_chnengtop);
		},500);
		var oload_containerleft=($(window).width()-$('.load-container').width())/2;
		var oload_containertop=($(window).height()-$('.load-container').height())/2;
		$('.load-container').css('left',oload_containerleft);
		$('.load-container').css('top',oload_containertop);
	};
	
			
	
