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
    reject("Error occur");
    });
}

let promise = getPromise();
promise.then((res) => {
    console.log("success", res);
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

//async

let getData2 = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(200);
            console.log("data: ", data)
        }, 2000)
    })
}

async function getAllData() {
    console.log("getting data 1");
    await getData2(1);
    console.log("getting data 2");
    await getData2(2);
    console.log("getting data 3");
    await getData2(3);
    console.log("getting data 4");
    await getData2(4);
    console.log("getting data 5");
    await getData2(5);
}
