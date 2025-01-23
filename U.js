
const input = document.querySelector("input");
input.addEventListener("blur", function () {
    console.log("blur is occured");
    
});
input.addEventListener("blur", function () {
    //console.log("focus is occured");
    input.style.backgroundColor = "red";
    input.style.padding = "2rem";
    
});
/*input.addEventListener("blur", function () {
    console.log("focusin is occured");
    
});
input.addEventListener("blur", function () {
    console.log("focusout is occured");
    
});*/
