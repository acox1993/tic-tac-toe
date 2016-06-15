$(document).ready(function(){
	box = 0;
	function goWin(value) {
		$('div.results').show().html("<p>The winner is <i class='fa " + value + "'aria-hidden='true'></i></p>")
		if (value == 'fa-times') {
			$('.tallyX p').append('I');
		}
		else {
			$('.tallyO p').append('I');
		};
		//$('td').children('i').hasClass(value).css('color','red');
			
		
	};

	$('div.starter').click(function(){

		if ($(this).children('i').hasClass('exe')) {
			$('div.starter').html("<i class='fa fa-circle-o oho' aria-hidden='true'></i>");
			box = 1;
		} 
		else {
			$('div.starter').html("<i class='fa fa-times exe' aria-hidden='true'></i>");
			box = 0;
		};
	});
	$('td').click(function(){
		$('div.starter').css('visibility', 'hidden');
		if ($(this).children('i').length > 0) {
			console.log('picked');
		}
		else {
			box++;
			if (box%2 == 0) {
				$(this).html("").append("<i class='fa fa-circle-o oho' aria-hidden='true'></i>");
			}
			else {
				$(this).html("").append("<i class='fa fa-times exe' aria-hidden='true'></i>");
			};
		};

		$.each(["fa-circle-o", "fa-times"], function(index, value) {
				if ($('.one').children('i').hasClass(value) &&  $('.two').children('i').hasClass(value) && $('.three').children('i').hasClass(value)) {
					goWin(value);	
				}
				else if ($('.four').children('i').hasClass(value) &&  $('.five').children('i').hasClass(value) && $('.six').children('i').hasClass(value)) {
					goWin(value);	
				}
				else if ($('.seven').children('i').hasClass(value) &&  $('.eight').children('i').hasClass(value) && $('.nine').children('i').hasClass(value)) {
					goWin(value);	
				}
				else if ($('.one').children('i').hasClass(value) &&  $('.four').children('i').hasClass(value) && $('.seven').children('i').hasClass(value)) {
					goWin(value);	
				}
				else if ($('.two').children('i').hasClass(value) &&  $('.five').children('i').hasClass(value) && $('.eight').children('i').hasClass(value)) {
					goWin(value);	
				}
				else if ($('.three').children('i').hasClass(value) &&  $('.six').children('i').hasClass(value) && $('.nine').children('i').hasClass(value)) {
					goWin(value);	
				}
				else if ($('.one').children('i').hasClass(value) &&  $('.five').children('i').hasClass(value) && $('.nine').children('i').hasClass(value)) {
					goWin(value);	
				}
				else if ($('.three').children('i').hasClass(value) &&  $('.five').children('i').hasClass(value) && $('.seven').children('i').hasClass(value)) {
					goWin(value);	
				};
		});

	});
	
	function goNew() {
		box = 0;
		$('div.starter').css('visibility', 'visible');
		$('div.results').hide();
		$('td').html("");
	};
	$('.new').click(function(){
		goNew();
	});	

	$('.restart').click(function(){
		goNew();
		$('.tallyWrapper p').html("");
	});
	

});


//highlighted to show which ones made victory
