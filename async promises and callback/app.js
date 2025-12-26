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

let promise = new Promise((resolve, reject) => {
    console.log("I am a promise");
});