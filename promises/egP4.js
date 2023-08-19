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

// bad idea of consuming function
let data=fetchData("www.pinboard.in");
let filename=writeFileData(data);
let response=uploadData("www.mega.com",filename);