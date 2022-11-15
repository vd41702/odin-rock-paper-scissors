game();


function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random()*3)];
}

function playRound(cs, ps) {
    const choices = "RPS";
    var c = choices.indexOf(cs.charAt(0).toUpperCase());
    var p = choices.indexOf(ps.charAt(0).toUpperCase());

    if(p == c) { //Tie
        console.log(`A tie! Both players chose ${cs}`);
        return 0;
    } else if(p == c + 1 || p == c - 2) { //player wins
        console.log(`You won! ${ps} beats ${cs}`);
        return 1;
    } else { //computer won
        console.log(`The Computer won! ${cs} beats ${ps}`);
        return -1;
    }
}

function game() {
    var playerScore = 0;
    var compScore = 0;

    for(var i = 0; i < 5; i++) {
        var playerChoice = prompt("Rock, Paper or Scissors?");
        var res = playRound(getComputerChoice(), playerChoice);
        if(res == 1) {
            playerScore++;
        } else if(res == -1) {
            compScore++;
        }
    }

    if(playerScore > compScore) {
        console.log(`You win ${playerScore} - ${compScore}`);
    } else if(playerScore < compScore) {
        console.log(`You lost ${playerScore} - ${compScore}`);
    } else {
        console.log(`You tied ${playerScore} - ${compScore}`);
    }
}

