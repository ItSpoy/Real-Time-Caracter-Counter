const textareaEl=document.getElementById("textarea");
const totalcounterEl=document.getElementById("total-counter");
const remainingcounterEl=document.getElementById("remaining-counter");
const maxlength =50;
textareaEl.addEventListener("keyup",()=>{
    updatcounter()
})
function updatcounter(){
    totalcounterEl.innerText = textareaEl.value.length
    remainingcounterEl.innerText = maxlength - textareaEl.value.length
}