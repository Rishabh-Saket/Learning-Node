var teacher="Sasuke";
function fun()
{
    console.log(subject); // functional scope assigned
    var teacher ="Sanket";
    let subject="Physics";
    teachingAssistant="Vishal";
    console.log(teacher);
    console.log(teachingAssistant);
}
fun();
console.log(teacher);
console.log(teachingAssistant);
