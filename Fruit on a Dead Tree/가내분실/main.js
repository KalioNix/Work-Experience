function start() {

	document.querySelector(".center").scrollIntoView(true);

	if (window.matchMedia('(orientation: portrait)').matches) {
		$('table').removeClass('horizontal');
		$('table').addClass('vertical');
	} else {
         $('table').removeClass('vertical');
         $('table').addClass('horizontal');
	}

	setTimeout(function() {window.scrollTo(0, 1)}, 100);
}

function popup(name){
	document.querySelector(".popup").style.backgroundImage="url(./image/" + name + ".png)"

	document.querySelector(".popup").style.display="block";
	document.querySelector(".back").style.display="block";
}

function popup_close(){
	document.querySelector(".popup").style.display="none";
	document.querySelector(".back").style.display="none";
}

$(window).on("orientationchange",function(){
   if(window.orientation == 0) // Portrait
      {
         $('table').removeClass('horizontal');
         $('table').addClass('vertical');
      }
   else // Landscape
      {
         $('table').removeClass('vertical');
         $('table').addClass('horizontal');
      }
});

window.addEventListener('load',function(){
	setTimeout(scrollTo,0,0,1);
},false);
