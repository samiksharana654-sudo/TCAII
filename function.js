function change(){

    var element = document.getElementById('pageheading2');
    // alert(element);
    element.firstChild.nodeValue = 'New Heading';
}
function newchange(){
document.addEventListener('click',change);
}
document.addEventListener('DOMContentLoaded',newchange);