let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const ind = Math.floor(Math.random() * 3);
    return options[ind];
}

const drawGame = (userChoice, compChoice) => {
    msg.innerText = `Game is Draw 🫠 Play again`;
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! 😊 Your ${userChoice} beats Computer ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost! 😢 Computer ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("User choice is", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice is", compChoice);

    if(userChoice === compChoice) drawGame(userChoice, compChoice);
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = (compChoice === "paper") ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = (compChoice === "scissors") ? false : true; 
        }
        else{
            userWin = (compChoice === "rock") ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});