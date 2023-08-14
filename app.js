let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");
let il = document.querySelector("li");

console.log("Hello");

btn.addEventListener("click",function(){
    let li = document.createElement("li");
    li.innerText = inp.value;
    ul.prepend(li);
    inp.value="";
})


ul.addEventListener("click",function(event){
    let b = event.target;
    b.style.backgroundColor = "red";
    b.style.color = "white";
    console.dir(b.style);
})

ul.addEventListener("dblclick",function(event){
    let b = event.target;
    b.style.backgroundColor = "rgb(242, 213, 139)";
    b.style.color = "rgb(233, 126, 144)"; 
})