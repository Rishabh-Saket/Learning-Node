function fetchCustom(url){
    console.log("Downloading start from",url);
    setTimeout(function process(){
        let downloadData="Dummy data";
        return downloadData;
    },3000);
}
const response=fetchCustom("www.google.com");
console.log("Dowloaded data",response);