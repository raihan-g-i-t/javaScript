let btn = document.querySelector("#btn");

btn.onclick = () =>{
    console.log("clicked");
}

btn.addEventListener("click", (obj)=>{
    console.log("Clicked Event");
    console.log(obj);
});