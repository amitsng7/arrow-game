var up1;
var down1;
var left1;
var right1;
var flag_up = 'U';
var flag_down = 'D';
var flag_right = 'R';
var flag_left = 'L';
var flag_key;
var min_width;
var max_width;
var min_height;
var max_height;
var min_speed;
var max_speed;

var xmlhttp = new XMLHttpRequest();
var url = "arrowdata.js";

xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        jsonResponse(xmlhttp.responseText);
    }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();

function jsonResponse(response) {
    var data = JSON.parse(response);
    min_width = data[0].width_min;
    console.log(min_width);
    max_width = data[0].width_max;
    min_height = data[0].height_min;
    max_height = data[0].height_max;
    min_speed = data[0].speed_min;
    max_speed = data[0].speed_max;
    document.getElementById("boundry").style.border = "1px solid #0000FF";
    document.getElementById("boundry").style.width = (max_width + 10) + 'px';
    document.getElementById("boundry").style.height = (max_height + 12) + 'px';
}

function arrowPointer(){
	if (up1 <= min_height) {
		flag_up = 'D'
	}
	if (up1 >= max_height) {
		flag_up = 'U'
	}
	if (down1 <= min_height) {
		flag_down = 'D'
	}
	if (down1 >= max_height) {
		flag_down = 'U'
	}
	if (left1 <= min_width) {
		flag_left = 'R'
	}
	if (left1 >= max_width) {
		flag_left = 'L'
	}
	if (right1 <= min_width) {
		flag_right = 'R'
	}
	if (right1 >= max_width) {
		flag_right = 'L'
	}
}

function moveArrowup() {
	arrowPointer();
	arrowLocation();
	if ((flag_up == 'U') && (flag_key == 'N')){
		flag_up = 'U'
		up1 = up1 - min_speed
		document.getElementById('up').innerHTML = "&#8593";
		document.getElementById('up').style.marginTop = up1 + 'px'
	}
	if((flag_up == 'D') && (flag_key == 'N')){   
		flag_up = 'D'
		up1 = up1 + min_speed
		document.getElementById('up').innerHTML = "&#8595";
		document.getElementById('up').style.marginTop = up1 + 'px'
	}
	arrowLocation();
	if((flag_down == 'U') && (flag_key == 'N')){   
		flag_down = 'U'
		down1 = down1 - min_speed
		document.getElementById('down').innerHTML = "&#8593";
		document.getElementById('down').style.marginTop = down1 + 'px'
	}
	if ((flag_down == 'D') && (flag_key == 'N')){
		flag_down = 'D'
		down1 = down1 + min_speed
		document.getElementById('down').innerHTML = "&#8595";
		document.getElementById('down').style.marginTop = down1 + 'px'
	}
	if((flag_left == 'L') && (flag_key == 'N')){   
		flag_left = 'L'
		left1 = left1 - min_speed
		document.getElementById('left').innerHTML = "&#8592";
		document.getElementById('left').style.marginLeft = left1 + 'px'
	}
	if((flag_left == 'R') && (flag_key == 'N')){   
		flag_left = 'R'
		left1 = left1 + min_speed
		document.getElementById('left').innerHTML = "&#8594";
		document.getElementById('left').style.marginLeft = left1 + 'px'
	}
	if((flag_right == 'R') && (flag_key == 'N')){   
		flag_right = 'R'
		right1 = right1 + min_speed
		document.getElementById('right').innerHTML = "&#8594";
		document.getElementById('right').style.marginLeft = right1 + 'px'
	}
	if((flag_right == 'L') && (flag_key == 'N')){   
		flag_right = 'L'
		right1 = right1 - min_speed
		document.getElementById('right').innerHTML = "&#8592";
		document.getElementById('right').style.marginLeft = right1 + 'px'
	}
}

function buttonArrowup(){
	arrowPointer();
	if (flag_down == 'U' && flag_up == 'U' && flag_key == 'U'){
		up1 = up1 - max_speed
		down1 = down1 - max_speed
		document.getElementById('down').style.marginTop = down1 + 'px'
		document.getElementById('up').style.marginTop = up1 + 'px'
	}
	if (flag_down == 'D' && flag_up == 'D' && flag_key == 'D'){
		up1 = up1 + max_speed
		down1 = down1 + max_speed
		document.getElementById('down').style.marginTop = down1 + 'px'
		document.getElementById('up').style.marginTop = up1 + 'px'
	}
	if (flag_down == 'D' && flag_up == 'U' && flag_key == 'U'){
		up1 = up1 - max_speed
		down1 = down1 + min_speed
		document.getElementById('down').style.marginTop = down1 + 'px'
		document.getElementById('up').style.marginTop = up1 + 'px'
	}
	if (flag_down == 'D' && flag_up == 'U' && flag_key == 'D'){
		up1 = up1 - min_speed
		down1 = down1 + max_speed
		document.getElementById('down').style.marginTop = down1 + 'px'
		document.getElementById('up').style.marginTop = up1 + 'px'
	}
	if (flag_down == 'U' && flag_up == 'D' && flag_key == 'U'){
		up1 = up1 + min_speed
		down1 = down1 - max_speed
		document.getElementById('down').style.marginTop = down1 + 'px'
		document.getElementById('up').style.marginTop = up1 + 'px'
	}
	if (flag_down == 'U' && flag_up == 'D' && flag_key == 'D'){
		up1 = up1 + max_speed
		down1 = down1 - min_speed
		document.getElementById('down').style.marginTop = down1 + 'px'
		document.getElementById('up').style.marginTop = up1 + 'px'
	}
	if (flag_left == 'R' && flag_right == 'R' && flag_key == 'R'){
		right1 = right1 + max_speed
		left1 = left1 + max_speed
		document.getElementById('left').style.marginLeft = left1 + 'px'
		document.getElementById('right').style.marginLeft = right1 + 'px'
	}
	if (flag_left == 'L' && flag_right == 'L' && flag_key == 'L'){
		right1 = right1 - max_speed
		left1 = left1 - max_speed
		document.getElementById('left').style.marginLeft = left1 + 'px'
		document.getElementById('right').style.marginLeft = right1 + 'px'
	}
	if (flag_left == 'L' && flag_right == 'R' && flag_key == 'R'){
		right1 = right1 + max_speed
		left1 = left1 - min_speed
		document.getElementById('left').style.marginLeft = left1 + 'px'
		document.getElementById('right').style.marginLeft = right1 + 'px'
	}
	if (flag_left == 'L' && flag_right == 'R' && flag_key == 'L'){
		right1 = right1 + min_speed
		left1 = left1 - max_speed
		document.getElementById('left').style.marginLeft = left1 + 'px'
		document.getElementById('right').style.marginLeft = right1 + 'px'
	}
	if (flag_left == 'R' && flag_right == 'L' && flag_key == 'R'){
		right1 = right1 - min_speed
		left1 = left1 + max_speed
		document.getElementById('left').style.marginLeft = left1 + 'px'
		document.getElementById('right').style.marginLeft = right1 + 'px'
	}
	if (flag_left == 'R' && flag_right == 'L' && flag_key == 'L'){
		right1 = right1 - max_speed
		left1 = left1 + min_speed
		document.getElementById('left').style.marginLeft = left1 + 'px'
		document.getElementById('right').style.marginLeft = right1 + 'px'
	}
	if (flag_key == 'U' || flag_key == 'D' || flag_key == 'R' || flag_key == 'L') {
		flag_key = 'N';
	}
	arrowPointer();
}

function arrowLocation(){
	var element = document.getElementById('up'),
	style = window.getComputedStyle(element),
	up = style.getPropertyValue('margin-top');
	up = up.match(/(\d+)/g);
	up = parseInt(up);
	up1= up;

	var element = document.getElementById('down'),
	style = window.getComputedStyle(element),
	down = style.getPropertyValue('margin-top');
	down = down.match(/(\d+)/g);
	down = parseInt(down);
	down1 = down;
	console.log(up, down);

	var element = document.getElementById('left'),
	style = window.getComputedStyle(element),
	left = style.getPropertyValue('margin-left');
	left = left.match(/(\d+)/g);
	left = parseInt(left);
	left1 = left;
	console.log(left);

	var element = document.getElementById('right'),
	style = window.getComputedStyle(element),
	right = style.getPropertyValue('margin-left');
	right = right.match(/(\d+)/g);
	right = parseInt(right);
	right1 = right;
	console.log(right);
}

function moveSelection(evt) {
	console.log("key event")
	key = evt.keyCode
	console.log(key)
	switch (evt.keyCode) {
	case 38: 
		flag_key = 'U';
		buttonArrowup();
		break;
	case 40: 
		flag_key = 'D';
		buttonArrowup();
		break;
	case 37: 
		flag_key = 'L';
		buttonArrowup();
		break;
	case 39: 
		flag_key = 'R';
		buttonArrowup();
		break;
	}
}

function docReady() {
	flag_key = 'N';
	setInterval('moveArrowup()', 50);
	document.addEventListener('keydown', moveSelection);
}