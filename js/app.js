$(document).ready(function(){
	box = 0;
	$('td').click(function(){
		box++;
		if (box%2 == 0) {
			$(this).html("").append("<i class='fa fa-circle-o oho' aria-hidden='true'></i>");
		}
		else {
			$(this).html("").append("<i class='fa fa-times exe' aria-hidden='true'></i>");
		};
			//should i do with if's or cases?
		//if .one, .two, .three 
		//if .four, .five, .six
		//if .seven, .eight, .nine
		//if .one, .four, .seven
		//if .two, .five, .eight
		//if .three, .six, .nine
		//if .one, .five, .nine
		//if .three, .five, .seven
	});
});