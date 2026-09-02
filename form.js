function change(){
    var element=document.getElementById("fname");
    alert(element.Value);
}
function newchange(){
    alert(1234567);
    var element=document.getElementById("demo")
    element.addEventListener("click",change);
}
document.addEventListener("DOMContentLoaded",newchange);