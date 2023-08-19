function fetchCustom(url,fn)
{
    console.log("Starting dowloading");
    setTimeout(function process(){
        console.log("Download complete");
        let response="Dummy data";
        fn(response);
    },3000);
}

function writeFile(data,fn){
    console.log("Starting writing data",data);
    setTimeout(function process(){
        console.log("Writing completed");
        let filename="google.txt";
        fn(filename);
        console.log("Writing completed"); 
    },4000);
}

function uploadFile(filename,url,fn){
    console.log("Uploadd carrer");
    setTimeout(function process(){
        console.log("File name:",filename,"uploaded succesfully on url:",url);
        let uploadedresponse="SUCCESS";
        fn(uploadedresponse);
        console.log("Upload ended");
    },4000);
}

fetchCustom("www.google.com",function downloadCAllback(response){
    console.log("Download response is: ",response);
    writeFile(response,function writeCallback(response){
        console.log("new File written is:",response);
        uploadFile(response,"drive.google.com",function uploadCallBack(response){
            console.log("File uploaded with response as:",response);
        });
    });    
    console.log("Ending the function");
});