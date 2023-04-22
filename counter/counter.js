let c= 0

function count(){
    c++;
    document.querySelector("h2").innerHTML = c;

    if(c%10 === 0){
        alert(`You have reached ${c}`);
    }
}


document.addEventListener("DOMContentLoaded", function(){
    
    document.querySelector("button").onclick = count;
})