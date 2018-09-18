var counted = 0;
$(window).scroll(function() {

	function counted_scroll(){
		var oTop = $('#counter').offset().top - window.innerHeight;
		if (counted == 0 && $(window).scrollTop() > oTop) {
			$('.count').each(function() {
				var $this = $(this),
					countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
						countNum: countTo
					},

					{

						duration: 2000,
						easing: 'swing',
						step: function() {
							$this.text(Math.floor(this.countNum));
						},
						complete: function() {
							$this.text(this.countNum);
							//alert('finished');
						}

					});
			});
			counted = 1;
		}
	}
	if ( document.getElementById('counter') ) {
		counted_scroll();
	}

});