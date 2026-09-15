
let myleads = JSON.parse(localStorage.getItem("myleads")) || [];
let inputbtn=document.getElementById('urlInput');
let deletebtn=document.getElementById('deleteURL');
let  ullist=document.getElementById('urlList');
let  savebtn=document.getElementById('saveButton');
let savetab=document.getElementById('saveTab');

 if (myleads.length > 0) {
    renderleads(myleads);
}

function renderleads(leads){
    let listitems="";
    
for (let i = 0; i < leads.length; i++) {
    listitems += `
        <li>
            <a target="_blank" href="${leads[i]}">
                ${leads[i]}
            </a>
        </li>
    `;
}
ullist.innerHTML = listitems;
}

savetab.addEventListener('click',function(){
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        // tabs is an array, so tabs[0] is the current tab
        let currentUrl = tabs[0].url;
        myleads.push(currentUrl);
        localStorage.setItem("myleads", JSON.stringify(myleads));
        renderleads(myleads);
        
        // Do something with the URL (e.g., save it)
        console.log(currentUrl);
    });




})


savebtn.addEventListener('click',function(){
    myleads.push(inputbtn.value);
     
    
    
    ullist.innerHTML +=
    `<li>
    <a target='_blank' href='${inputbtn.value}'>${inputbtn.value}</a>
    </li>`;
    
    inputbtn.value = "";
    localStorage.setItem("myleads", JSON.stringify(myleads));
    
    
    renderleads(myleads);
   
    
    
   
})



deletebtn.addEventListener('dblclick',function(){

localStorage.clear();
myleads=[];


renderleads(myleads);

})
    


