let correctPassword = "1234";

function foo (){

    for(let i = 1; i<=3; i++){
    let userInput = prompt("Enter your Password");
    if(userInput === "1234"){
        alert("you password is correct");
        break;
    }else{
        alert(`Your password is ${i} not correct`);
    }
}
}
//============================================================== 
// let userInput = "pakistan";

// let firstLetter = userInput.slice(0,1).toUpperCase();
// let remainingLetter = userInput.slice(1).toLocaleLowerCase();

// console.log(firstLetter + remainingLetter);
//================================================================== 
// let studentName = ["salman", "bilal", "danyal"];

// let properCase = [];

// for (i = 0; i< studentName.length; i++){
//     properCase.push(studentName[i].slice(0,1).toUpperCase()+studentName[i].slice(1));

//  console.log(properCase);
 
// }
//=============================================================== 
// let str = "Honesty is the best best policy"

// let userFind = "best";

// for(let i = 0; i<str.length; i++){

// if(userFind.toLowerCase() === str.toLowerCase().slice(i, i+userFind.length)){
//     console.log("match")
// }
// }
//====================================================================== 
