function factorial(n)
{
    return (n<=1)? 1:n*factorial(n-1);
}
[1,2,3,4,5].map(factorial);


[1,2,3,4,5].map(function (n){
    return n<=1? 1:n*(n-1);
});