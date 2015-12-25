var userName = prompt("What is your name?");

var userChoice = prompt("Do you choose rock, paper or scissors?"); 
    
console.log(userName + ": " + userChoice);

var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function (choice1, choice2) {
    if (choice1 === choice2) 
    {
        return userName + " has tied with the computer!";
    }
    else if (choice1 === "rock") 
    {
        if (choice2 === "scissors") {
            return "The computer wins!"; }
        else {
            return userName + " wins!"; }
    }
    else if (choice1 === "paper") 
    {
        if (choice2 === "rock") {
            return "the computer wins!"; }
        else {
            return userName + " wins!"; }
    }
    else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return userName + " wins!"; }
        else {
            return "the computer wins!"; }
    }  
    else if (choice2 !== "rock", "paper", "scissors", "Rock", "Paper", "Scissors") {
        return "Fine then, " + userName + ", you can't play!"; }
};

compare (userChoice, computerChoice);



