let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const drawGame = () => {
    msg.innerHTML = "Game was Draw. Play again!";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerHTML = userScore;
        msg.innerHTML = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerHTML = compScore;
        msg.innerHTML = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    // Generate computer choice
    const compChoice = genCompChoice();

    if(userChoice === compChoice) {
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock" && compChoice === "paper"){
            userWin = false;
        }
        else if(userChoice === "paper" && compChoice === "scissors"){
            userWin = false;
        }
        else if(userChoice === "scissors" && compChoice === "rock"){
            userWin = false;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});