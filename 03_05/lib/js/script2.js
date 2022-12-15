function ani1(){
	var b = document.getElementById("bild1");
	if(b.width++ < 300) setTimeout(ani1,1);
}
function ani2(){
	var b = document.getElementById("bild2");
	if(b.style.width++ < 300) setTimeout(ani2,1);
}

window.onload=function(){
	document.getElementById("btn1").onclick=ani1;
	document.getElementById("btn2").onclick=ani2;
}
