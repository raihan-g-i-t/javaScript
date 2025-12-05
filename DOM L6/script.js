console.log("Hello!");

console.log(document.body);

let head = document.getElementById("heading");

console.log(head);

let tag = document.getElementsByTagName("p");

console.dir(tag);
console.log(tag);

let qall = document.querySelector("p"); 

let h2 = document.querySelector("h2");

h2.innerText = h2.innerText + " from Raihan";

let box = document.querySelectorAll(".box");
console.log(box);

// box[0].innerText = "A";
// box[1].innerText = "B";
// box[2].innerText = "C";

id = 0;

for (boxs of box){
    box[id].innerText = "Raihan " + id;
    id++;
}