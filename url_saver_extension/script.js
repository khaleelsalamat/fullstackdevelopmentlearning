let inputbtn=document.getElementById('urlInput');
let  ullist=document.getElementById('urlList');

let myleads=[];
let  savebtn=document.getElementById('saveButton');
savebtn.addEventListener('click',function(){
    myleads.push(inputbtn.value);
    ullist.innerHTML +=
    `<li>
    <a target='_blank' href='${inputbtn.value}'>${inputbtn.value}</a>
    </li>`;
    
    inputbtn.value = "";
    
   
})
    



   