const student = {
    name: "Raihan",
    age: 26,

    print(){
        console.log("Name: ",this.name);
        console.log("Age: ",this.age);
    }
}

const raihan = {
    name: "x",
    age: 10,
}

raihan.__proto__ = student;

raihan.print();