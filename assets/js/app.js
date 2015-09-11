var currentSlide = 0;

var correctAnswers = [
	1,
	3,
	3,
	2,
	1
];

var numberOfCorrectAnswers = 0;
var numberOfSlides = 5;

$(document).ready(function(){
	$('.flexslider').flexslider({
		slideshow: false,
		pauseOnHover: true,
		directionNav: false,
		animationLoop: false,
		animation: "fade",
			before:function(slider){
			$("#submitAnswer").attr("disabled", "disabled");
			},
			after:function(slider){
			currentSlide = slider.currentSlide;
			}
	});
	
	$('ul.controlGroup').each(function(){
		var controlGroup = $(this);
		var radios = controlGroup.find('input:radio');
		radios.change(function(){
			$("#submitAnswer").removeAttr("disabled");
			var checkedAnswer = radios.index($(this));
			console.log('they checked this answer: ' + checkedAnswer);
			console.log('they are on slide number ' + currentSlide);
			console.log('the correct answer is ' + correctAnswers[currentSlide]);
			if(checkedAnswer == correctAnswers[currentSlide]){
				(numberOfCorrectAnswers += 1);
			}
			console.log(numberOfCorrectAnswers);
		});
	});

	$('#submitAnswer').click(function(){
		if(currentSlide < 4){
			$('.flexslider').flexslider('next');
		}
		else if(currentSlide == 4){
			alert("You got " + numberOfCorrectAnswers + " out of 5 " + ", or " + Math.round(((numberOfCorrectAnswers/numberOfSlides) * 100)) +"%!");
		}
	});

	$('.new').click(function(){
		location.reload();
	});

});

