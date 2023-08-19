function todo(task){
    setTimeout(function fun(){
        console.log("completed",task);
    },1500);
}
console.log("Starting");
todo("asssignments");
console.log("ending");