function main() {
	var snowNum = 0;
	var cloud = setInterval(snowDrop, 3000);
	function snowDrop() {
		snowNum++;
		if (snowNum > 30) {
			clearInterval(cloud);
		}
		var snow = creatImg();
		var pos = -200;
		var contain = document.getElementById("contain");
		setInterval(frame, 5);
		snowNum++;
		var h = contain.offsetHeight;
		function frame() {
			pos++;
			snow.style.top = pos + 'px';
			if (pos > h) {
				var r = (Math.random() * contain.offsetWidth);
				snow.style.left = r + "px";
				pos = -200;
			}
		}
	}
}
function creatImg() {

	var snow;
	snow = document.createElement("IMG");
	snow.setAttribute("src", "snow.png");
	snow.setAttribute("alt", "snow");
	snow.setAttribute("class", "snow")
	document.getElementById("contain").appendChild(snow);
	return snow;
}
