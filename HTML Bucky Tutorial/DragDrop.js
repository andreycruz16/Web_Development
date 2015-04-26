function doFirst (argument) {
	water = document.getElementById('water');
	water.addEventListener("dragstart", startDrag, false);
	water.addEventListener("dragsend", endDrag, false);
	leftbox = document.getElementById('leftbox');
	leftbox.addEventListener("dragenter", dragenter, false);
	leftbox.addEventListener("dragleave", dragleave, false);
	leftbox.addEventListener("dragover", function(e){e.preventDefault();}, false);
	leftbox.addEventListener("drop", dropped, false);
}
function endDrag(e) {
	pic = e.target;
	pic.style.visibility = 'hidden';
}
function dragenter(e) {
	e.preventDefault();
	leftbox.style.background="SkyBlue";
	leftbox.style.border="3px solid red";
}
function dragleave(e) {
	e.preventDefault();
	leftbox.style.background="white";
	leftbox.style.border="3px solid blue";
}
function startDrag(e) {
	var code = '<img src="water.jpg">';
	e.dataTransfer.setData('Text', code);
}
function dropped(e) {
	e.preventDefault();
	leftbox.innerHTML = e.dataTransfer.getData('Text');
}

window.addEventListener("load", doFirst, false);