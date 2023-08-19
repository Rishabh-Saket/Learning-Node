function fun(){
    let name="Yashii";
    function callback(){
        console.log(name);
        console.log(college);
    }
    return callback;
}

let x=fun();
x();
var college="DTU Delhi";
x();