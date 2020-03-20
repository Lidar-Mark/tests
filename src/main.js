
let variable1 = "lidar";
const variable2 = "ben";

let namesArray = ["lidar","ben"];
// let whatIsIOnIndex0 = namesArray[0];
// let whatIsIOnIndex1 = namesArray[1];



function whileLoopExample (array){

    let index = 0;

    //as long as the while loop condition is valid, execute the code.
    while(index < array.length){
        let name = array[index];
        console.log(name);
        index++;
    }

}




function forLoopExample (array){

    let globalParam = 1;
    //as long as the while loop condition is valid, execute the code.
    for (let index=0; index < array.length; index++){
        let bugabuga2 = array[index];
        console.log(bugabuga2);
    }

}


// [ 0 , 1 , 2 , 3 ]
// ["a","b","c","d"]
whileLoopExample(namesArray);

forLoopExample(namesArray);