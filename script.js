// Question 1
//Create an array called petArray with 3 string items in it: "cat", "cow", "dog".

var petArray =["cat","cow","dog"];

// Question 2
//Console log the value of the second item in petArray.
console.log(petArray[1]);

//Question 3
//Add the item "sheep" to petArray using the push method.
petArray.push("sheep");
console.log(petArray);

//Question 4
//Console log how many items there are now in petArray using the length method.
console.log(petArray.length);

//Question 5
//Create an object called catObject with 3 properties: name, colour, age. Add appropriate values (and type of values) for each of these properties.

var catObject =
    {
        name: "Rufsen",
        colour: "black",
        age: 7, 
    }
;


//Question 6
//Console log the value of the third property of catObject.
console.log (catObject.age);

//Question 7
//Take the value of catObject (the {} part) and place it inside an array called catArray.
var catArray =["rufsen","black",7];

console.log(catArray);

// Question 8
//Loop through catArray and console log each property of each object inside (there will be only 1 object inside).

for(var i = 0; i < catArray.length; i++) {

    console.log(catArray[i]);
}

// Question 9
//Create a function called logToConsole. The function should accept 1 argument. Decide on the name of the argument and console log its value inside the function.
function logToConsole(streetNumber){
    var address = "Tømmerdalen"
    console.log (address + "", streetNumber)
}

logToConsole(161);

//Question 10
//Call the logToConsole function and pass in the value "donkey".

function logToConsole(streetNumber){
    var address = "tømmerdalen"
    console.log (streetNumber)
}

logToConsole("donkey");