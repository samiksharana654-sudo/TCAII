function color(){
    var element=document.getElementById("circle");
    element.style.backgroundColor="red";

}
function newcolor(){
    var element=document.getElementById("circle");
    document.addEventListener("click",color);
}
document.addEventListener("DOMContentLoaded",newcolor)