function todo(task)
{
    console.log("starting todo function");
    setTimeout(function fun(){
        console.log("completed",task);
    },1500);
    task="projects";
    console.log("ending todo function");
}
console.log("starting");
todo("assignments");
console.log("ending");