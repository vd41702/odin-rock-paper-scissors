const buttons = document.querySelectorAll(".container>button");
const compChoiceDiv = document.querySelector(".results > .selection");

const compChoiceH4 = document.createElement('h4');
const playerScoreDisplay = document.querySelector('#playerScore > p');
const compScoreDisplay = document.querySelector('#computerScore > p');

compChoiceDiv.appendChild(compChoiceH4);

for(const btn of buttons) {
    btn.addEventListener('click', playRound);
}

playerScore = 0;
computerScore = 0;

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random()*3)];
}

function calcRound(ps, cs) {
    
    const choices = "RPS";
    var c = choices.indexOf(cs.charAt(0).toUpperCase());
    var p = choices.indexOf(ps.charAt(0).toUpperCase());

    if(p == c) { //Tie
        return 0;
    } else if(p == c + 1 || p == c - 2) { //player wins
        return 1;
    } else { //computer won
        return -1;
    }
}

function playRound(e) {
    var ps = e.target.textContent;
    var cs = getComputerChoice();
    res = calcRound(ps, cs);

    //check who won, and update scores
    if(res == -1) {
        computerScore++;
    } else {
        playerScore += res;
    }

    //display scores
    playerScoreDisplay.innerText = playerScore;
    compScoreDisplay.innerText = computerScore;

    //display computer selection
    compChoiceH4.innerText = cs;

    //check if someone won
    if(computerScore == 5) {
        alert("You lost :(");
    } else if(playerScore == 5) {
        alert("You won!!");
    }
    
    
}



