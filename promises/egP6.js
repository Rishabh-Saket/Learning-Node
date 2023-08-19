// downloading ,writing and uploading the data

function fetchData(url){
    return new Promise(function(resolve, reject){
        console.log("Starting downloading data from url:",url);
        setTimeout(function(){
            let data="dummy data";
            console.log("downloading complete");
            resolve(data);
        },3000);
    });
}

function writeFileData(data){
    return new Promise(function (resolve, reject) { 
        console.log("Started writing",data,"in a file");
        setTimeout(function(){
            let filename="json.txt";
            console.log("File written successsfully");
            resolve(filename);
        },4000);
    });
}

function uploadData(url,file){
    return new Promise(function (resolve,reject) { 
        console.log("Uploading started on",url," filename :",file);
        setTimeout(function(){
            let result="SUCCESS";
            console.log("Uploading done");
            resolve(result);
        },5000);
    });
}
 
//---> this piece of code solves inversion of control problems but promise hell is itself is a problem again
//--> new Promise object gets created and value "SAKET" gets updated in that promise object
let downloadData=fetchData("www.google.com");
let x=downloadData.then(function processDownload(value){
    console.log("Downlaoded data is:",value);
    return "SAKET";
});

x.then(function(value){
    console.log("value of promise type object of x is:",value);
});