function isEven(num)
{
    if(num%2 == 0)
    {
        return "Even";
    }
    return "Odd";
}

for(let i=1;i<=20;i++)
{
    console.log(i,isEven(i));
}