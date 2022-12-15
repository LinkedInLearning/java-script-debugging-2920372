var a = 1;
function eins(){
  let a = 2;  
  console.log(a);
  {
    let a;
    a++;
  }
  
  console.log(a);
}
console.log(a);
eins();
console.log(a);