var daten={
  nname:"Norris",
  vname:"Chuck"
}
window.onload=function(){
  
  document.getElementsByTagName("h1")[0].onmouseenter=function(){
   				  document.getElementById("info").innerHTML = daten["vname"];
	
  };
  document.getElementsByTagName("h1")[0].onmouseleave=function(){
    document.getElementById("info").innerHTML=daten["nname"];
  };
};