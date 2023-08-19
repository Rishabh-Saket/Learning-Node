function fetchData(url){
    return new Promise(function(resolve, reject){
        console.log("Starting downloading data from url:",url);
        setTimeout(function process(){
            let data=undefined;
            if(typeof data=="undefined")
            {
                reject(data);
            }
            else
            {
            console.log("downloading complete");
            resolve(data);
            }
        },3000);
    });
}
let x=fetchData("www.google.com");
x.then(function exec(value){
    console.log("value is:",value);
    return 10;
},function error(err){
    console.log("Handled error:",err);
    return 10;
}).then(function exec1(val){
    console.log("value is",val);
}).catch(function errorHandle(err){
    console.log("error:",err);
});
