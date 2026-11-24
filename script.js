const text=document.getElementById("text")
const save=document.getElementById("save")
const display=document.getElementById("display")

const saved=localStorage.getItem("text") || "";
display.textContent=saved;

save.addEventListener("click",function(){
    localStorage.setItem("text",text.value);
    display.textContent=text.value;
});