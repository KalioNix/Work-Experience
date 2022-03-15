var main_class;
var cookie_class;
var loading_class;

function position(){
	var w_height = window.outerHeight;
	var w_width = window.outerWidth;

	if(w_height>=w_width){
		var i_width = w_width;
		var i_height = i_width*3/2;

		var x_position = w_width*48/100;
		var y_position = ((w_height-i_height)/2) + (i_height*58/100);

	}else if(w_height<w_width){
		var i_height = w_height;
		var i_width = i_height*2/3;

		var x_position = ((w_width-i_width)/2) + (i_width*48/100);
		var y_position = w_height*58/100;
	}

	var c_height = i_height*18/100;

	var cookie_class = document.querySelector('.cookie');

	cookie_class.style.left=x_position+'px';
	cookie_class.style.top=y_position+'px';

	cookie_class.style.height=c_height+'px';

}

function go(){
	cookie_class.classList.add('rotate');
	setTimeout(function(){cookie_class.style.display='none';},2500)
	setTimeout(function(){main_class.classList.add('disappear');},3000)
	setTimeout(function(){main_class.style.display='none';},3500)
	setTimeout(function(){location.href="down.html"},4000);
}

function load(){
	main_class = document.querySelector('.main');
	cookie_class = document.querySelector('.cookie');
	loading_class = document.querySelector('.loading');
	setTimeout(function(){loading_class.classList.add('disappear');},4000) //4초 뒤에 사라지기 시작, 1초
	setTimeout(function(){
		loading_class.style.display='none';
		main_class.style.display='block';
		main_class.classList.add('appear');
	},4900);
	setTimeout(function(){
		cookie_class.style.display='block';
		cookie_class.classList.add('appear2');
	},5500);

}