//your JS code here. If required.
let newh1 = document.createElement("h1");
new.innerText = 'Width: ${window.innerWidth} and Height: ${window.innerHeight}';
document.append(newh1);

window.onresize = function(){
	newh1.innerText = 'Width: ${window.innerWidth} and Height: ${window.innerHeight}';
}