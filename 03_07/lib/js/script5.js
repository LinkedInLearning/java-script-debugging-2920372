let a = 1;
function eins(){
  let a = 1;  
  console.log(a);
  zwei();
  a++;
  console.log(a);
}
function zwei(){
    let a = 42;
    console.log(a);
}
console.log(a);
eins();
console.log(a);