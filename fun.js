const readline = require('readline');
const arr = [];



const makePer = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

Perform = ()=>{
    do(
        makePer.question("Enter a number: ", (answer)=>{
    arr.push(makePer.input);

    console.log(arr);

//makePer.close();

})

    )
    while(arr.length<9);

}

Perform();






