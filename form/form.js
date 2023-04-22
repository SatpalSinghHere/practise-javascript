document.addEventListener("DOMContentLoaded", function(){
    const name = document.querySelector("form").onsubmit = function(){

        const name = document.querySelector("#name").value;
        alert(`Hello ${name}`);
    }
});