var asyncAdd= (a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof a === 'number' && typeof b === 'number'){
                resolve(a+b);
            } else {
                reject('Arguments must be number');
            }
        },1500);
    });
};

asyncAdd(5,7).then((res)=>{
    console.log('result: ',res);
    return asyncAdd(res,'33');
},(errorMesage)=>{
    console.log(errorMesage);
}).then((res)=>{
    console.log('should be 45',res);
},(errorMesage)=>{
    console.log(errorMesage);
});
// var somePromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('hey it worked');
//         // reject('unable to fullfill promise');
//     },2000);
// });

// somePromise.then((message)=>{
//     console.log('succes: ',message);
// },(errorMessage)=>{
//     console.log('Error: ', errorMessage);
// });
