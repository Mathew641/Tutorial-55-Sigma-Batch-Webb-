// alert("Welcome to the tutorial-55 of sigma batch code with harry");

console.log("Let's start learning about the JS variables, Datatypes, Object");

console.log("ECMA --> Standard on which modern JS is based");
console.log("\n");

console.log("Ques . What is variables?");
console.log("Ans. Variables are container used to carry some data and get saved in the memory, or more precisely variable is a name given to memory location where some kind of sata is stored.");
console.log("\n");

console.log("Data can be of varying type, it might be number, string, floating value, boolean, symbol etc.");
console.log("\n");

console.log("Ques. How to we create the variables ?")
console.log("Ans. Using keywords 'let'. Previously we also used keyword 'var' but not now as with 'var' keyword global variable is created.");

// let me show you creating variable
let a = 5;
let b = 8;
console.log("value stored in a =",a);
console.log("Value stored in b =",b);
console.log("Sum of a and b is -->",a+b);
let c = "Hare Krishna";
console.log(c);

// Using "typeof" function we can also figure out the type of data stored in a variable.
console.log("Data type of a is ->",typeof(a), "   Data type of b is ->",typeof(b), "    DAta type of c is ->",typeof(c));
console.log("String always written inside either double quotes or single quotes.");

console.log(`In modern JS we use templates to avoid the confusion of "__" and '  ' `);

console.log("\n");

console.log("There are some rule need to follow while naming a variable:");
console.log("1. Name can contain characters, number, $ and _ only");
console.log("2. Variable name never start with number.");
console.log("3. variable name can be start either with character, $ or _");
console.log("4. There are some reserved keywords such as let, var, true, false, console etc.. which can't be used as variable name");
console.log("5. When use more than word while creating the variable, we use camelCase pattern")
console.log("\n");

// JS is a case sensistive language, let me show you 
let capital = "Delhi";
let Capital = "Mumbai";
// let's print them
console.log("capital is ->",capital);
console.log("Capital is ->",Capital);
// Although name of both above variable are same but still they are different.

console.log("\n");

console.log("In JS we have 3 keywords for creating a variable");
console.log("1. var --> var keyword is use to create the global variable and not a block scoped variable which can be access from anywhere throughtout the entire code and thereby can change/modify data store in that variable, which makes the code little complicated and also generate some unexpexted error and therfore we prevent ourself using it to create the variable.");
console.log("\n");

console.log("2. let --> let keyword is use to variable and once defined it can't be defined again althoug data stored in can be changed both in value and in type. if let keyword use to create variable inside some block for eg if-else block then that variable is called Block scoped variable only and can't be access ouside those block. We more frequently use let keyword for creating variable.");
let naam = "Abhishek mathur";
console.log("value stored in naam variable is ->",naam);
naam = "Aryan kapoor";
console.log("Value stored in naam variable now is -->", naam);
let homeAddress = "Vidisha";
console.log(homeAddress);
{
    let college = "MANIT";
    console.log(college);
    // e.g of block scoped variable.
}
// console.log(college); // error -> college is not defined
console.log("\n");

console.log("3. const --> const keyword create variable which can't be redine and alaso data stored in it can't be chabged");
const rollNumber = 203117004;
console.log("Roll number create using const keyword ->",rollNumber);
// rollNumber = 465464;
// console.log(rollNumber); // error -> assignment to constant variable.


console.log("\n\n\n");


console.log(" There are 2 datata types in JS: ");
console.log("1. Primitive datatype");
console.log("2. Non-primitive data type(object datatype)");
console.log("\n");
console.log("1. Primitive Datatype -> Primitive data type are some basic data types. They are basic for many of the data types.");
console.log(` I. Number
II.  Null
III. Boolean -> It has 2 values true and false.
IV.  String -> Sequence of character.
V.   Symbol
VI.  Undefined -> variablwe which you have defined but there is no value present inside it is called undefined data type variable.
VII. Bigint -> It helps in storing big integers.
`);

let x = "Harry bhai";
let y = 22;
let z = 43.5;
const p = true;
let q = undefined;
let m = null;
console.log(x,y,z,p,q,m);
console.log( typeof (x), typeof (y), typeof (z), typeof (p), typeof (q), typeof (m))
// null is a obect data type.

/*
    Ques. Why typeof null cpmes out to be 'object' even though null comes under primitive data type?

    Ans. Refer to stackoverflow.
*/ 


//  Linting process -> linting process is a process where JS tells where you have been wrong in writing code by indicating red color mark

console.log("\n");
console.log("2. Non-primitive Data type(Object data type)");
console.log("I. Object -> User defined data type which can be created with the help of some primitive data type.Object data type is basicaly a key-value pair. Object data type is use to store multiple information aboutthe single entity.");
const userInfo = {
    name: "Abhishek",
    lastName: "mathur",
    age: 31,
    gender: "MAle",
    nationality: "Indian",
    homeDistrict: "Vidisha",
    "job role": "Developer"
};
console.log(userInfo);
console.log(userInfo.name);
// console.log(userInfo("age"));

// for inserting new key-value pair in the existing object
userInfo.salary = 150000;
console.log(userInfo);
userInfo.isMarried = false;
console.log(userInfo);

//for changing the value of existing key of an object. 
userInfo.homeDistrict = "Ujjain";
console.log(userInfo);


console.log("\n\n\n");
// Practice Questions 

/*
    Ques1. Create a variable of type string and try to add a number to it?
*/
let naamm = "Abhishek";
let favNum = " 6";
console.log(naamm + favNum);

/*
    Ques2. Use typeof operator to find the data type of the string in the last question?
*/
console.log("Data type of variable 'naamm' is ->",typeof naamm);

/*
    Ques3. Create a const object in JS. can you changwe it to hold a number later?
*/
const newObj = {
    firstName: "Arjun",
    fatherName: "Pandu",
    motherName: "Kunti",
    wifeName: "Draupdi"
};
console.log(newObj);
// let's try to add key for holding number
newObj.numOfBrothers = 4;
console.log("const Object 'newObj' after inserting number to it ->",newObj);
// Yes we are able to add number to js object.

/*
    Ques4. Try to add a new key to the const object in problem 3 were you able to do it?
*/
newObj.sonName = "Abhimanyu";
console.log("const Object 'newObj' after addition of new key ->",newObj);

/*
    Ques5. Write a js program to create a word-meaning dictionary of 5 words?
*/
const dict = {
    Unconsiousness : "Lack of awareness",
    Inevitable: "that can't be prevent from happening",
    Arduous: "Challenging, kind of tough task",
    Arouse: "to provoke someone",
    "Ubiquitous": "Present everywhere"
};
console.log("Dictionary of 5 word-menaing is ->", dict);
