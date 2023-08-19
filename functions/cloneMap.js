function mapper(arr,fun)
{
    // arr is the array
    let result=[];
    for(let i=0;i<arr.length;i++)
    {
        let res=fun(arr[i],i);
        result.push(res);
    }
    return result;
}

let arr=[1,2,3,4,5];
let x=mapper(arr,function(v,i) {
    console.log(i,v,v*v*v);
    return v*v*v;
});
console.log(arr,x);