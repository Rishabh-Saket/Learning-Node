var name="YASHIKA";
function greet() {
    console.log("Hey threre ",name);
    var age=23; // functional scope
    // this function has also fucntioanal scope
    function information() {
        console.log("Age of",name," is ",age);
    }
    information();
}
greet();