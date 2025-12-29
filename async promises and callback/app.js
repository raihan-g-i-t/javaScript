// const getdata = (data, getNextData) => {
//     setTimeout(() => {
//         console.log("Data: ", data);
//         if(getNextData){
//             console.log("Inside if");
//             getNextData();
//         }
//     }, 2000);
// }

// getdata(2, () => {
//     getdata(3);
// });

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     resolve("success");
// });

const getPromise = () => {
    return new Promise((resolve, reject) => {
    console.log("I am a promise");
    // resolve("success");
    reject("Error occured")
    });
}

let promise = getPromise();
promise.then((res) => {
    console.log("sucess", res);
});

promise.catch((err) => {
    console.log("errpr: ", err);
});

let asyncFunc = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("timeout");
            resolve("success");
        }, 2000);
    });
}

let a1 = asyncFunc();
a1.then((res) => {
    console.log(res);
});
