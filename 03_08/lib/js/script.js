var a;
var i = 0;
while (i< 10) {
    i++;
    a = Math.random();
    console.log(i + ": " + a);
    try {
       if (a < 0.4) throw 42;
    }
    catch(e){
        console.log(e);
    }
}
i=0;
while (i< 10) {
    i++;
    a = Math.random();
    console.log(i + ": " + a);
    if (a < 0.4) throw 42;
}
