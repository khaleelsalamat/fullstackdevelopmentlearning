const num1 = document.querySelector('.first_numbers');
const num2 = document.querySelector('.secound_numbers');
let result = document.querySelector('.result');
function add(){
    let n1 = parseFloat(num1.value) || 0;
    let n2 =parseFloat(num2.value) || 0;
     result.textContent = n1 +  + n2;
}
function sub(){
    let n1 = parseFloat(num1.value) || 0;
    let n2 =parseFloat(num2.value) || 0;
    result.textContent= n1 -n2 ;
}
function mul(){
    let n1 = parseFloat(num1.value) || 0;
    let n2 =parseFloat(num2.value) || 0;
    result.textContent=n1*n2;
}
function div(){
    let n1 = parseFloat(num1.value) || 0;
    let n2 =parseFloat(num2.value) || 0;
    result.textContent=n1/n2;
    if (n2==0){
        result.textContent="can't divide by zero";
    }
    else {
        result.textContent=n1/n2;
    }
}
function clearall(){
  num1.value=0;
  num2.value=0;
  result.textContent = "Click an operator";
}