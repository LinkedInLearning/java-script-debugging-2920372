function rek(i){
  
  if(i++ < 10) rek(i);
  console.log(i);
}

rek(0);