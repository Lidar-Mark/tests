
let char = 'A';
let int = 1;
let string = "this is a string";

console.log(string[0]);

let charArray = ['t','h','i','s' ,'i','s'];
let intArray = [1,2,3];

let objectExample = {
    name: "lidar",
    age: "27",
    family: "mark"
};




function getPersonObject(nameParam,ageParam,familyParam){

    let returnJson = {
        name: nameParam,
        age: ageParam,
        family: familyParam
    };

    // console.log(returnJson);
    return returnJson;
}


const variable2 = ["ben","lidar"];

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


function getFirstLetterOfString(string){
    return string[0];
}

// [ 0 , 1 , 2 , 3 ]
// ["a","b","c","d"]

// whileLoopExample(namesArray);

// forLoopExample(namesArray);

let json = getPersonObject("ben","35","mark");
console.log(json.name);
console.log(json.age);
console.log(json.family);