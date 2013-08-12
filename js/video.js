var video;

function setValue() {
	video = document.getElementById('video');
	video.addEventListener('click',playControl,false);
}

function playControl() {
	if (video.paused == false) {
		video.pause();
	} else {
		video.play();
	}
}
	
window.onload = setValue;