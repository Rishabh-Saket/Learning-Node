function good(name){
    return function(){
        console.log(name);
    }
}
let x=good("Yashii");
x();