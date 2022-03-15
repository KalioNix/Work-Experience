function table_size(){
	var table = document.querySelector('table');
	var width = table.clientWidth;
	table.style.height = width/3*1.16*4+"px";

	var text_div = document.querySelector('.text_div');
	text_div.style.height = window.outerHeight;
	text_div.style.width = window.outerWidth;
	setTimeout(function(){document.querySelector('body').classList.add('appear2');},500);
	
	set_popup();
}

function down(i){
	var td = document.querySelectorAll('td')[i];

	if (td.className=="dis") {
		console.log("disabled");
	}else if (td.className=="no") {
		td.classList.add('disappear2');
		setTimeout(function(){
			td.classList.remove('disappear2');
			td.style.backgroundImage="url(image/box/" + i + ".png)";
			td.className="yes";
			td.classList.add('appear');
		},1000);
	}else if (td.classList.contains("yes")) {
		
		//down_button.href="./image/down/"+i+".png";

		var popup = document.querySelector('.popup');
		popup.style.display='block';
		var back = document.querySelector('.back');
		back.style.display='block';
		document.querySelector('.popup').classList.add('popup_loading');
		popup.style.opacity = 1;

		popup.style.backgroundRepeat = "no-repeat";
		popup.style.backgroundImage = "url('image/popup/"+ i +".png')";
		popup.style.backgroundSize = "90vw";

		var down_button = document.querySelector('.down_button');
		document.querySelector('.down_button').href='image/down/' + i + '.jpg';
	}
}

function go_main(){
	document.querySelector('.circle').classList.add('disappear');//circle, text_div 제거, 1.5초
	document.querySelector('.text_div').classList.add('disappear');
	setTimeout(function(){document.querySelector('.circle').style.display='none';},1450);
	setTimeout(function(){document.querySelector('.text_div').style.display='none';},1450);
	setTimeout(function(){document.querySelector('center').classList.add('main_load');},1500);

	var tds = document.querySelectorAll('.dis')
	for(var i=0; i<12; i++){
		tds[i].className="no";
	}
}

function set_popup(){
	var w_height = window.outerHeight;
	var w_width = window.outerWidth;

	var p_width = w_width*0.9;
	var p_height = p_width;

	var w_center = (w_width-p_width)/2;
	var h_center = (w_height-p_height)/2;

	var popup = document.querySelector('.popup');
	popup.style.left=w_center+'px';
	popup.style.top=h_center+'px';
}

function popup_close(){
	var popup = document.querySelector('.popup');
	popup.style.display='none';
	popup.style.opacity = 0;
	var back = document.querySelector('.back');
	back.style.display='none';
}

