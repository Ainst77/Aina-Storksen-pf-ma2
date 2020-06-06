// Question 1

var petArray =["cat","cow","dog"];

// Question 2
console.log(petArray[1]);

//Question 3
petArray.push("sheep");
console.log(petArray);

//Question 4
console.log(petArray.length);

//Question 5

var catObject =
    {
        name: "Rufsen",
        colour: "black",
        age: 7, 
    }
;


//Question 6
console.log (catObject.age);

//Question 7
var catArray =["rufsen","black",7];

console.log(catArray);

// Question 8

for(var i = 0; i < catArray.length; i++) {

    console.log(catArray[i]);
}

// Question 9
function logToConsole(streetNumber){
    var address = "Tømmerdalen"
    console.log (address + "", streetNumber)
}

logToConsole(161);

//Question 10

function logToConsole(streetNumber){
    var address = "tømmerdalen"
    console.log (streetNumber)
}

logToConsole("donkey");