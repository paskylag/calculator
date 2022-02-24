/*<div id="container">
<input type="number" id="num_1" value="0">
<input type="number" id="num_2" value="0">
<div id="button"><button><i class="fas fa-plus-circle" id="btn_1"></i></button>
<button><i class="fas fa-minus-circle" id="btn_2"></i></button>
<button><i class="fas fa-circle-xmark" id="btn_3"></i></button>
<button><i class="fas fa-arrows-rotate" id="btn_4"></i></button></div>
    </div><br><br>
<h3 id="num_0">0</h3>*/



let num_1=document.querySelector('#num_1');

let num_2=document.querySelector('#num_2');

let btn_1=document.querySelector('#btn_1');

let btn_2=document.querySelector('#btn_2');

let btn_3=document.querySelector('#btn_3');

let btn_31=document.querySelector('#btn_31')

let btn_4=document.querySelector('#btn_4');

let num_0=document.querySelector('#num_0');

/*btn_1.addEventListener('click', function(){if(num_1.value==0 || num_2.value==0){alert('Please fill the form')}else{let sum=num_1.value+num_2.value; num_0.innerHTML=parseInt(sum)}})


btn_2.addEventListener('click', function(){if(num_1.value=="" || num_2.value==""){alert("Please fill data")} else{num_0.innerHTML=num_1.value-num_2.value}})


btn_3.addEventListener('click', function(){let times=num_1.value * num_2.value; num_0.innerHTML=times})


btn_31.addEventListener('click', function(){let divide=num_1.value / num_2.value; num_0.innerHTML=divide})


btn_4.addEventListener('click', function(){num_1.value=0; num_2.value=0; num_0.innerHTML=0;})


/*for(x=1;x<=20;x++){if(x%3==0){console.log('JAVASCRIPT')} else{console.log(x)}}


for(x=1; x<=100;x++){if(x%3==0){console.log('Fizz')} else if(x%5==0){console.log('Buzz')} else if(x%5==0 && x%3==0){console.log('FizzBuzz')} else{console.log(x)}*/

function addtwonum(a,b){let sum=a+b; return sum}

function minustwonum(a,b){let minus=a-b; return minus}

function timestwonum(a,b) {let times=a*b; return times}

function dividetwonum(a,b) {let divide=a/b; return divide}

let plus1=""; let plus2="";


    btn_1.addEventListener('click', function(){plus1=parseInt(num_1.value); plus2=parseInt(num_2.value); num_0.innerHTML=addtwonum(plus1,plus2)})

    btn_2.addEventListener('click', function(){plus1=parseInt(num_1.value); plus2=parseInt(num_2.value); num_0.innerHTML=minustwonum(plus1,plus2)})

    btn_3.addEventListener('click', function(){plus1=parseInt(num_1.value); plus2=parseInt(num_2.value);num_0.innerHTML=timestwonum(plus1,plus2)})

    btn_31.addEventListener('click', function(){plus1=parseInt(num_1.value); plus2=parseInt(num_2.value); num_0.innerHTML=dividetwonum(plus1,plus2)})

    btn_4.addEventListener('click',function(){num_1.value='0'; num_2.value='0'; num_0.innerHTML='0'})

    