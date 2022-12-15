window.onload=function(){
  
  document.getElementById("bild").onmouseenter=function(){
   				  document.getElementById("info").innerHTML = document.getElementById("bild").alt;
	
  };
  document.getElementById("bild").onmouseleave=function(){
    document.getElementById("info").innerHTML="";
  };
};