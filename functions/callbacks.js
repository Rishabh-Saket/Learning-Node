function fun(x,fn){
    for(let i=0;i<x;i++)
    {
        console.log(i);
    }
    fn();
}
fun(11,function(){
    console.log("Finally the task executed");
});