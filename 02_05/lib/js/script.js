window.onload=function(){
  document.getElementById("info").innerHTML=document.getElementById("bild").alt;
  document.getElementById("bild").onmouseenter=function(){
    try{
      let xhr = new XMLHttpRequest();
      xhr.open("get", "ajax.php", true);
      xhr.onreadystatechange = function() {
			  if (xhr.readyState == 4) {
				  document.getElementById("info").innerHTML = xhr.responseText;
			  }

		  };
		  xhr.send();
    }
    catch(e){
      document.getElementById("info").innerHTML=e;
    }
  };
  document.getElementById("bild").onmouseleave=function(){
    document.getElementById("info").innerHTML=document.getElementById("bild").alt;
  };
};