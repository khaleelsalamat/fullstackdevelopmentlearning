const spursNum = document.querySelector('.knicksNUm');
const knicksNum=  document.querySelector('.spursNUm');
function add(num1){
    let n1 = parseFloat(num1.textContent) || 0;
    n1+=1;
    num1.textContent=n1;
}
function sub(num1)
{
let n1 = parseFloat(num1.textContent) || 0;
n1-=1;
num1.textContent=n1
}
function clearnumber(num1) {
    num1.textContent=0;

}
