$(function(){
	$('.burger').click(function(){
		$('.header__menu').slideToggle(500);
	});

	$('#bar1').barfiller({ barColor: '#a1a1a1' });
  $('#bar2').barfiller({ barColor: '#a1a1a1' });
  $('#bar3').barfiller({ barColor: '#a1a1a1' });
  $('#bar4').barfiller({ barColor: '#a1a1a1', duration: 3000
  });

  });