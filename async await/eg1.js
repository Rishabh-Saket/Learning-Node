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


async function processing(){
    let downloadData=await fetchData("www.pinboard.in");
    console.log("Downloading await completed");
    let file=await writeFileData(downloadData);
    console.log("writting await completed");
    let uploadResponse=await uploadData("www.drive.goole.com",file);
    console.log("uploading  await completed");
    console.log("Completed upload with response ",uploadResponse);
    return true; 
}
processing(); 