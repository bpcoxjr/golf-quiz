var currentSlide = 0;

var correctAnswers = [
	1,
	3,
	1,
	2,
	1
];

var numberOfCorrectAnswers = 0;

$(document).ready(function(){
	$('.flexslider').flexslider({
		slideshow: false,
		pauseOnHover: true,
		directionNav: false,
		animationLoop: false,
		animation: "fade",
			after:function(slider){
			currentSlide = slider.currentSlide;
			}
	});
	
	$('ul.controlGroup').each(function(){
		var controlGroup = $(this);
		var radios = controlGroup.find('input:radio');
		radios.change(function(){
			var checkedAnswer = radios.index($(this));
			console.log('they checked this answer: ' + checkedAnswer);
			console.log('they are on slide number ' + currentSlide);
			console.log('the correct answer is ' + correctAnswers[currentSlide]);
			if(checkedAnswer == correctAnswers[currentSlide]){
				(numberOfCorrectAnswers += 1);
			}
			console.log(numberOfCorrectAnswers);
		});
		alert("You got " + numberOfCorrectAnswers + " out of 5!");
	});

	$('#submitAnswer').click(function(){
		$('.flexslider').flexslider('next');
		if(currentSlide == 4){
			console.log("You got " + numberOfCorrectAnswers + " out of 5!");
		}
	});

	$('.new').click(function(){
		location.reload();
	});

});

