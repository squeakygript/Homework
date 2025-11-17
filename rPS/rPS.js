let userInput = prompt("R for rock,P for paper, or S scissors?").toUpperCase();
while (true) { 
if (userInput !== "R" && userInput !== "P" && userInput !== "S") {
    userInput = prompt("Invalid input. Please enter R, P, or S.").toUpperCase();
}
    else {
        break;      
    }
}

let randomNum = Math.random(); 
let computerInput = "";



if (randomNum < 0.333) {
    computerInput = "R";
}
    else if (randomNum < 0.666) {
        computerInput = "P";
} 
     else {
        computerInput = "S";
}             
if (userInput === computerInput) {
    alert("It's a tie! You both chose " + userInput);
}           
    else if ((userInput === "R" && computerInput === "S") || 
        (userInput === "P" && computerInput === "R") || 
        (userInput === "S" && computerInput === "P")) {
        alert("You win! " + userInput + " beats " + computerInput);
    } 
     else {
    alert("You lose! " + computerInput + " beats " + userInput);
}