const add=(function(){
    let counter=0;
    return function exec(){
        counter+=1;
        console.log(counter);
        return counter;
    }
})();
console.log(add());
add();
add();
let x=add();
console.log(x);