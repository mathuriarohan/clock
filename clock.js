document.addEventListener('mousemove', trackMouse, false);
var isMouseDown = false;
document.onmouseup = function() {isMouseDown = false;}
function trackMouse(mouse) {
	if (isMouseDown) {
		updateMinutes(mouse.pageX-200, mouse.pageY-200);
	}
}
function updateMinutes(x, y) {
	var min = 0;
	if (x > 0) {
		min = Math.floor(15 + Math.atan(y/x) / Math.PI * 30);
	} else if (x == 0) {
		if (y >= 0) {
			min = 30;
		} else {
			min = 0;
		}
	} else {
		min = Math.floor(45 - Math.atan(-1*y/x) / Math.PI * 30);
	}
	if (min == 60) {
		min = 0;
	}
	updateAngle(min);
	document.getElementById("num").value = min;
}
function updateAngle(min) {
	var s = document.getElementById("min");
	var angle = min * 6 + 90;
	var addString = "rotate(" + (min*6-90) + "deg)";
	s.style.WebkitTransform = addString;
	s.style.MozTransform = addString;
	s.style.oTransform = addString;
	s.style.MsTransform = addString;
}
