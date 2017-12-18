	$(document).ready(function(){

		$('.tab').hover(
			function(){
				$(this).css('background-color','#3F7FBF').css('color','#FFFFFF').css('text-decoration','none');
			},
			function(){
				$(this).css('background-color','#FFFFFF').css('color','#000000');
			}
		);
	});
