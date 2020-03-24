var sleep = require('sleep');
let char = 'A';
let int = 1;
let string = "this is a string";

let cli_coloring = require("cli-coloring");

console.log("white text: ", cli_coloring.white("Whatever world ."));
console.log("grey text: ", cli_coloring.grey("Whatever world ."));
console.log("black text: ", cli_coloring.black("Whatever world ."));
console.log("blue text: ", cli_coloring.blue("Whatever world ."));

console.log(string[0]);

let charArray = ['t', 'h', 'i', 's', 'i', 's'];
let intArray = [1, 2, 3];

let objectExample = {
    name: "lidar",
    age: "27",
    family: "mark"
};


function getPersonObject(nameParam, ageParam, familyParam) {

    let returnJson = {
        name: nameParam,
        age: ageParam,
        family: familyParam
    };

    // console.log(returnJson);
    return returnJson;
}


const variable2 = ["ben", "lidar"];

let namesArray = ["lidar", "ben"];
// let whatIsIOnIndex0 = namesArray[0];
// let whatIsIOnIndex1 = namesArray[1];


function whileLoopExample(array) {

    let index = 0;

    //as long as the while loop condition is valid, execute the code.
    while (index < array.length) {
        let name = array[index];
        console.log(name);
        index++;
    }

}


function forLoopExample(array) {

    let globalParam = 1;
    //as long as the while loop condition is valid, execute the code.
    for (let index = 0; index < array.length; index++) {
        let bugabuga2 = array[index];
        console.log(bugabuga2);
    }

}


function getFirstLetterOfString(string) {
    return string[0];
}

// [ 0 , 1 , 2 , 3 ]
// ["a","b","c","d"]

// whileLoopExample(namesArray);

// forLoopExample(namesArray);

tryCatchExample();

// let json = getPersonObject("ben","35","mark");
// console.log(json.name);
// console.log(json.age);
// console.log(json.family);

// asynTest().then();

(async function asynTest() {
    sleep.sleep(2);
    await console.log("done")
})();


class Person {
    name;
    age;
    mother;

    constructor(name, age, mother) {
        this.name = name;
        this.age = age;
        this.mother = mother
        this.saySomething("created person: " + name)
    }

    saySomething(message) {
        console.log(message);
    }
}


class Parent extends Person{
    numOfChildren;
    constructor(name, age, mother,numOfChildren){
        super(name,age,mother);
        this.numOfChildren=numOfChildren;
    }
}


let lidarPerson = new Person("lidar", "27", "irit");
let benPerson = new Person("ben", "35", "li");

let irit = new Parent("irit","?","savta",4);
console.log(irit);


let lidarObjectLiteral = {
    name: "lidar",
    age: "27",
    family: "mark",
    mother: "irit"
};

let benObjectLiteral = {
    name: "ben",
    age: "35",
    family: "mark",
    mother: "li"
};

let nirObjectLiteral = {
    name: "nir",
    age: "25",
    family: "mark",
    mother: "irit"
};

let orinObjectLiteral = {
    name: "orin",
    age: "22",
    family: "mark",
    mother: "irit"
};

console.log(lidarPerson.name);

function tryCatchExample() {
    try {
        // let answer = 1/0;
        throw new Error("new error")
        // console.log(answer);
    } catch (error) {
        console.log(error);
    }
}

/**
 *  Function calls another function
 */

function funcA(func) {
    func();
}


function funcB() {
    console.log("hello");
}


funcA(funcB);


/**
 *  end
 */


/**
 *  Function calls another function
 */

function funcA(func, param) {
    // calls funcB with param
    func(param);
}


function funcB(param) {
    console.log("function B: " + param);
}

function funcC(param) {
    console.log("function C: " + param);
}


// accepts 2 parameters, first: a function, second: a string
funcA(funcB, "hello Parameter");

funcA(funcC, "hello Parameter");

/**
 *  end
 */


let mashu = function funcD1(parameter) {
    console.log("explicit function: " + parameter);
};

let name = "lidar";

let funcD = (parameter) => {
    console.log("anonymous function: " + parameter);
};