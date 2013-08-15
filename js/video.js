var video = [];
function setValue() {
	<!-- for (var i = 0; i<3; i++) { -->
	video.push(document.getElementById("video1"));
	video[0].addEventListener('click',function(){video[0].play();},false);
	video.push(document.getElementById("video2"));
	video[1].addEventListener('click',function(){video[1].play();},false);
	video.push(document.getElementById("video3"));
	video[2].addEventListener('click',function(){video[2].play();},false);
	video.push(document.getElementById("video4"));
	video[3].addEventListener('click',function(){video[3].play();},false);
	video.push(document.getElementById("video5"));
	video[4].addEventListener('click',function(){video[4].play();},false);
	video.push(document.getElementById("video6"));
	video[5].addEventListener('click',function(){video[5].play();},false);
	video.push(document.getElementById("video7"));
	video[6].addEventListener('click',function(){video[6].play();},false);
}
window.onload = setValue;