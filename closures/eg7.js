function test(){
    for(var i=0;i<3;i++){
        let j=i;
        setTimeout(function exe(){
            console.log(`j:${j}`);
        },j*1000);
    }
}
test();