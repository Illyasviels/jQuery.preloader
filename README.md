# jQuery.preloader plugin
preloader plugins for your websites 

## Usage:
follow `preloader-test.html`, just have fun!

## A possible obj:
```
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
```

## Example:

http://study.acgme.cn/jQuery.preloader/preloader-test.html 
https://www.acgme.cn/ 
