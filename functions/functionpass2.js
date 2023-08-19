function gun(fun)
{
    console.log("inside gun function");
    fun();
    console.log("leaving gun function");
}
gun(function(){
    console.log("new function passed");
});