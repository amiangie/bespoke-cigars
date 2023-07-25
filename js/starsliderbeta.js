(function($){
	function starslider(origin, opts) {
		var s = this

		var items = $(opts.items, origin)
		var bullets = (opts.bullets) ? $(opts.bullets, origin) : $()
		var arrows = (opts.arrows) ? $(opts.arrows, origin) : $()

		var active = 0

		var css = {
			off: {
				'opacity': 0,
				'z-index': 1
			},
			on: {
				'opacity': 1,
				'z-index': 2
			}
		}

		items.css(css.off).eq(active).css(css.on)
		bullets.removeClass('active').eq(active).addClass('active')

		if (items.length <= 1) {
			arrows.hide()
		}

		function gotoItem(index) {
			if (index < 0 || index >= items.length || active === index) return

			items.eq(active).stop(true).animate(css.off, opts.speed)
			bullets.eq(active).removeClass('active')

			items.eq(index).stop(true).animate(css.on, opts.speed)
			bullets.eq(index).addClass('active')

			active = index
		}

		var ticker = setInterval(function(){
			var next = active+1
			if (next == items.length) next = 0
			gotoItem(next)
		}, opts.interval)

		bullets.on('click', function(ev){
			ev.preventDefault()
			ticker && (ticker=clearInterval(ticker))
			gotoItem($(this).index())
		})

		arrows.on('click', function(ev){
			ev.preventDefault()
			ticker && (ticker=clearInterval(ticker))

			var index = ($(this).hasClass('right')) ? active+1 : active-1

			if (index < 0) index = items.length-1
			else if (index >= items.length) index = 0

			gotoItem(index)
		})
	}


	var defaults = {
		speed: 1000,
		interval: 5000,
		items: '.item',
		bullets: null,
		arrows: null
	}

	$.fn.starsliderBeta = function(opts){
		opts = $.extend(true, {}, defaults, opts)
		this.each(function(){
			if (!$(this).hasClass('starsliderBeta')) {
				$(this).addClass('starsliderBeta')
					   .data('api', new starslider(this, opts))
			}
		})
		return this
	}
})(jQuery);
