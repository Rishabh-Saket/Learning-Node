function fetch(url){
    return new Promise(function(resolve,reject){
        for(let i=0;i<100000000;i++)
        {            
        }
        console.log("Compeleted");
        resolve("Saket");
    });
}

let x=fetch("www.google.com");
console.log("We have called the promise",x);