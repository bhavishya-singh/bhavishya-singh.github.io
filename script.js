var s;
function screen(){
	var blackscreen = document.getElementById('blackscreen');
	var box = document.getElementById('box');
	if(s===false){
		box.style.display = 'block';
		blackscreen.style.display = 'none';
		s = true;
	}else{
		box.style.display = 'none';
		blackscreen.style.display = 'block';
		s = false;
	}
}
function onload(){
	s = false;
	console.log('here');
	var button = document.getElementById('startbutton');
	button.addEventListener("click",screen);
}