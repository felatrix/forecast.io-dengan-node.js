var getUser = (id,callback) => {
    var user = {
        id:id,
        name:'Viking'
    };
    setTimeout(()=>{
        callback(user);
    },3000);
    callback(user);
};

getUser(12,(userObject)=>{
    console.log(userObject);
});