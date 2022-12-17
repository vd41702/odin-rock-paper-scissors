const buttons = document.querySelectorAll(".container>button");

for(const btn of buttons) {
    btn.addEventListener('click', playRound);
}


function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random()*3)];
}

function playRound(e) {
    console.log(e.target.textContent);
    var cs = getComputerChoice();
    const choices = "RPS";
    return;
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



