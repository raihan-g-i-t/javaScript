class office {
    employee(name, age){
        console.log(name, age);
    }
}

let obj = new office;

obj.employee("Raihan", 26);

class user {
    name;
    email;

    showData(name, email){
        console.log(this.name = name);
        console.log(this.email = email);
        return name,email;
    }
}

let objUser = new user;

objUser.showData("Raihan", "raihan@gmail.com");

class admin extends user {
    constructor(){
        super();
        super.name = "x";
    }
}

try{
    console.log(hello);
}catch(err){
    console.log(err);
}