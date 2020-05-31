$(document).ready(function () {
	
		//Слайдер
	
		$('.slider').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			dots: false,
			variableWidth: true,
			centerMode: true,
			responsive: [
				{
					breakpoint: 1300,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						centerMode: false,
						arrows: false,
						dots: true,
						variableWidth: false,
					}
				},
				{
					breakpoint: 1025,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						centerMode: false,
						arrows: false,
						dots: true,
						variableWidth: true,
						variableHeight: true,
					}
				},
				{
					breakpoint: 770,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						centerMode: false,
						arrows: false,
						dots: true,
						variableWidth: true,
						variableHeight: true,
					}
				},
			]
		});

});