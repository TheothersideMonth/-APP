$(function(){

	var $Underline = $('.Title-Underline');
	var $Cat_a = $('.Option li')

	$Underline.css({'width':$Cat_a.eq(0).width(),'left':$Cat_a.eq(0).offset().left,'opacity':'1'})
	$Cat_a.eq(0).css('color','#65c4aa')
	$Cat_a.click(function(e){
		var Hexadecimal = Math.round(Math.random()*1000000) + '';
		if (Hexadecimal.length<6) {
			var Defect = 6-Hexadecimal.length;
			for (var i = 0; i < Defect; i++) {
				Hexadecimal="0"+ Hexadecimal
			}
		}
		$Underline.css({'width':$(this).width(),'left':$(this).offset().left,'opacity':'1','background':'#'+6-Hexadecimal})
		
		$Cat_a.css('color','#999')
		$(this).css('color','#65c4aa')


		var _index = $(this).index();
		mySwiper.slideTo(_index, 1000, false);
	})

	var mySwiper = new Swiper('.swiper-container', {
		autoplay: 5000,//可选选项，自动滑动
	});

});