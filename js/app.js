$(document).ready(function(){
	box = 0;
	function goWin(value) {
		$('div.results').show().html("<p>The winner is " + value + "</p>")
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
		$('div.starter').hide();
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

		$.each(["oho", "exe"], function(index, value) {
				if ($('.one').children('i').hasClass(value) &&  $('.two').children('i').hasClass(value) && $('.three').children('i').hasClass(value)) {
					goWin(value);	
				};
		});

	});
		
		//if .one, .two, .three 
		//if .four, .five, .six
		//if .seven, .eight, .nine
		//if .one, .four, .seven
		//if .two, .five, .eight
		//if .three, .six, .nine
		//if .one, .five, .nine
		//if .three, .five, .seven
	
		//make results div
		//highlighted to show which ones made victory

});


// restart button and functionality