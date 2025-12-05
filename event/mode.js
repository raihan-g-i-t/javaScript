let btn = document.querySelector("#btn");
let body = document.querySelector("body");
let currentMode = "light";

btn.addEventListener("click", ()=>{
    // if(text === "Light"){
    //     btn.innerHTML = "Dark";
    //     document.body.style.backgroundColor = "white";
    // }else{
    //     btn.innerHTML = "Light";
    //     document.body.style.backgroundColor = "black";
    // }
    if(currentMode === "light"){
        btn.innerHTML = "Light";
        currentMode = "dark"
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        btn.innerHTML = "Dark";
        currentMode = "light"
        body.classList.add("light");
        body.classList.remove("dark");
    }

});