function fun(x,good)
{
    console.log(x);
    good();
}

let g=function good(){
    console.log("inside g function");
    return function(){
        console.log("returned function");
    }
}
fun(20,g());