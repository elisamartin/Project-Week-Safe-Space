// Nav animation

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
