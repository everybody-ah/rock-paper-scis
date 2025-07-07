let playerScore = 0; 
let computerScore = 0;



//round number
//win number
//player choice 
//computer choice 


function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function getPlayerChoice() {
    let choice = prompt("Pick one of the three:  Rock, Paper, or Scissors")
    return choice
}

function getComputerChoice() {
    let choice = getRandomInt(3)
    if (choice == 0) {
        return "Rock";
    }
    else if (choice == 1) { 
        return "Paper"; 
    }
    else { 
        return "Scissor";
    }
}

function compareChoices(comp, player) {
    if (comp == player) {
        
        return alert("Its a DRAW!");
    }
    else if (comp == "Rock" && player == "Scissor") { 
        computerScore++;
        return alert("The Computer Wins This Round!");
    }
    else if (comp == "Rock" && player == "Paper") { 
        playerScore++;
        return alert("You Won The Round!");
    }
    else if (comp == "Scissor" && player == "Rock") { 
        playerScore++;
        return alert("You Won The Round!");
    }
    else if (comp == "Scissor" && player == "Paper") { 
        computerScore++;
        return alert("The Computer Wins This Round!");
    }
    else if (comp == "Paper" && player == "Rock") { 
        computerScore++;
        return alert("The Computer Wins This Round!");
    }
    else if (comp == "Paper" && player == "Scissor") { 
        playerScore++;
        return alert("You Won The Round!");
    }
    else {
        return alert("whatever"); 
    }

}



while (playerScore < 3 && computerScore < 3) { 
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    compareChoices(playerChoice, computerChoice);
    console.log("Player Score: " + playerScore + " Computer Score: " + computerScore);
}

    



