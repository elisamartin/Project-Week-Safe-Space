// Nav animation
/*
$('.h-menu').on('click', function() {
	$(this).toggleClass('active');
});
*/

class Menu {
	constructor(element) {
		this.element = element;
		this.button = document.querySelector('.h-menu');
		this.content = document.querySelector('.top-nav');
		this.links = document.querySelectorAll('.top-nav a');

		this.button.addEventListener('click', () => {
			this.toggleContent();
			this.toggleCross();
		});
	}
	toggleContent() {
		this.content.classList.toggle('hide');
		this.content.classList.toggle('show');
		this.links.forEach((link) => {
			link.classList.toggle('hide');
			link.classList.toggle('showA');
		});
	}
	toggleCross() {
		this.button.classList.toggle('active');
	}
}

let menus = document.querySelectorAll('header').forEach((menu) => new Menu(menu));

// FAQ counter

$('.counter').each(function() {
	var $this = $(this),
		countTo = $this.attr('data-num');

	$({ countNum: $this.text() }).animate(
		{
			countNum: countTo
		},
		{
			duration: 5000,
			step: function() {
				$this.text(Math.floor(this.countNum));
			},
			complete: function() {
				$this.text(this.countNum);
			}
		}
	);
});
