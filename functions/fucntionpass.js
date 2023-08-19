function fun()
{
    console.log("fun called");
}

function gun(fn)
{
    console.log("inside gun function");
    fn();
    console.log("leaving gun function");
}
gun(fun);