var a = 1;
function eins(){
  var a = 2;  
  console.log(a);
  {
    var a;
    a++;
  }
  
  console.log(a);
}
console.log(a);
eins();
console.log(a);