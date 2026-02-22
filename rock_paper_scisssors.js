let userScore =0;
let computerScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#userScore");
const computerScorePara = document.querySelector("#computerScore");

const genComputerChoice =()=>{
    const options = ["rock", "paper", "scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () =>{
    console.log("game was draw");
    msg.innerText = "Game was Draw. Play Again!";
    msg.style.backgroundColor = "#081b31";
}

const showWinnner = (userWin, userChoice, computerChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win");
        msg.innerText = `You Win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        computerScore++;
        computerScorePara.innerText = computerScore;
        console.log("you loose");
        msg.innerText = `You Loose! Computer's ${computerChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
console.log("user choice = ",userChoice);
//generate computer choice
const computerChoice =genComputerChoice();
console.log("computer - choice = ",computerChoice);

if(userChoice === computerChoice){
    //draw game
    drawGame();
}
else{
    let userWin = true;
    if(userChoice==="rock"){
        //scissors or paper
        userWin = computerChoice==="paper" ? false : true;
    }
    else if(userChoice ==="paper"){
        // rock, scissors
        userWin = computerChoice ==="scissors" ? false : true;
    }
    else{
        //rock or paper
        userWin = computerChoice ==="rock" ? false : true;
    }
    showWinnner(userWin, userChoice, computerChoice);

}

}

choices.forEach ((choice) => {
    console.log(choice);
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});