let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText = input.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    input.value = "";
   
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();

    }
});





// let delBtns = document.querySelectorAll(".delete");
// for (delBtns of delBtns){
//     delBtns.addEventListener("click",function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
       
//     });
// }