function fun(val){
    if(val==undefined) throw "Please provide suitable value";
    else return val*20;
}

try
{
    let x=fun();
}catch(error){
    console.log("Eroor:",error);
}

