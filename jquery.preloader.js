var options = {
	frame: {
		style: { // frame style
			'position': 'fixed',
			'left': '0',
			'top': '0',
			'width': '100vw',
			'height': '100vh',
			'z-index': '233',
			'background-color': '#2A234C',
			'text-align': 'center',
			'user-select': 'none'
		},
		font: { // frame font style
			class: 'css1676c407111b7fc'
		}
	},
	elements: {
		style: { // element global style
			'background-image': '-webkit-linear-gradient(left, #b6b6b6, #bbbbbb 33%, #eeeeee 50%, #bbbbbb 67%, #b6b6b6)',
			'-webkit-text-fill-color': 'transparent',
			'-webkit-background-clip': 'text',
			'-webkit-background-size': '200% 100%',
			'color': '#b6b6b6',
		}
	},
	loaded: { // onload shield disappear
		'delay': '1.6', // when delay comes to -1, shield disappear
		'step': '0.02', // every interval delay-=step
		'interval': '28', // clock interval
	}
};

var elements = [ // WARN: the last is on the top
	{
		html: '<p>鄂ICP备15011876号</p>', // DIV element show HTML
		animate: {
			speed: '8000' // animation interval
		},
		style: { // element style
		    'position': 'absolute',
		    'bottom': '20px',
		    'width': '100vw',
		    'text-align': 'center'
		}
	},
	{
		html: '稍等一会儿，精彩马上开始！',
		animate: {
			speed: '8000'
		},
		style: {
			'font-size': '18px'
		}
	},
	{
		html: '分享一切 尽在奏界',
		animate: {
			speed: '3000'
		},
		style: {
			'margin': '12px',
			'margin-top': 'calc(50vh - 86px)',
			'font-size': '36px'
		}
	}
];

(function (options, elements){
	// console.log
	console.log('Thanks for using jQuery.preloader plugins !!!')
	// get body element
	var preloader_body = $('body');
	// init frame div
	var preloader_frame = $('<div></div>').html('');
	preloader_frame.css(options.frame.style);
	preloader_frame.addClass(options.frame.font.class);
	preloader_body.prepend(preloader_frame);
	// add element to frame
	var preloader_element_set = new Array();
	for (var index in elements){
		var preloader_element = $('<div></div>').html(elements[index].html);
		preloader_element_set[index] = preloader_element;
		preloader_element.css(options.elements.style);
		preloader_element.css(elements[index].style);
		preloader_element.css('background-position', '-400% 0%');
		preloader_frame.prepend(preloader_element);
	}
	// add animation to every element
	var preloader_clock = setInterval(function(){
		for (var index in elements){
			if($(preloader_element_set[index]).css('background-position-x') == '-400%'){
				$(preloader_element_set[index]).css('background-position-x', '0%');
				$(preloader_element_set[index]).animate({'background-position-x': '-400%'}, parseInt(elements[index].animate.speed), 'swing');
			}
		}
		if($(preloader_frame).css('display') == 'none'){
			clearInterval(preloader_clock);
		}
	}, 33);
	// window load function
	$(document).ready(function(){
		var preloader_opacity = parseFloat(options.loaded.delay) + 1;
		var preloader_clock = setInterval(function(){
			preloader_opacity -= options.loaded.step;
			if(preloader_opacity <= 1)
				$(preloader_frame).css('opacity', preloader_opacity);
			if(preloader_opacity <= 0){
				clearInterval(preloader_clock);
				$(preloader_frame).css('display', 'none');
			}
		}, options.loaded.interval);
	})
})(options, elements);