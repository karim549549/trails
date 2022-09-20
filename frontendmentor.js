let x=3;
let y=document.getElementById('counter');
y.innerHTML=x;
let btn=document.getElementById('clicked');
let circle=document.getElementById('circle');
console.log(circle);
btn.onclick = function () {
    btn.style.backgroundColor='white'; 
    circle.remove();
    x=x-1;
    if(x >=0 )
    y.innerHTML=x;
}

let btn2=document.getElementById('clicked2');
let circle2 =document.getElementById('circle2');
btn2.onclick =function (){
    btn2.style.backgroundColor='white';
    circle2.remove();
    x=x-1;
    if(x >=0 )
    y.innerHTML=x;
}

let btn3=document.getElementById('clicked3');
let circle3=document.getElementById('circle3');
btn3.onclick =function (){
    btn3.style.backgroundColor='white';
    circle3.remove();
    x=x-1;
    if(x >=0 )
    y.innerHTML=x;
}
let markall=document.getElementById('markall');
markall.onclick=function(){
    btn.style.backgroundColor='white';
    btn2.style.backgroundColor='white';
    btn3.style.backgroundColor='white';
    circle.remove();
    circle2.remove();
    circle3.remove();
    x=0;
    y.innerHTML=x;
}