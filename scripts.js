const choices = ["ROCK","PAPER","SCISSORS"]
const buttons = document.querySelectorAll("button")
const results = document.querySelector(".results")
const runningScore = document.querySelector(".runningScore")
const instructions = document.querySelector(".instructions")

function getComputerChoice(choices){
    //computer choice is selected randomly from list of choices
    return choices[Math.floor(Math.random()*choices.length)]
}

function playRound(computerSelection,playerSelection){
//paper beats rock, rock beats scissors, scissors beats paper
    if (computerSelection === playerSelection){
        return("It's a tie")
    }else{
        if (
        (computerSelection === "PAPER") && (playerSelection=== "ROCK")||
        (computerSelection === "ROCK") && (playerSelection=== "SCISSORS")||
        (computerSelection === "SCISSORS") && (playerSelection=== "PAPER")
        ){
            return(`You lose! ${computerSelection} beats ${playerSelection}`)
        }
        else{
            return(`You win! ${playerSelection} beats ${computerSelection}`)
        }
    }
}

function updateScore(result,computerSelection,playerSelection){
    if (result===`You lose! ${computerSelection} beats ${playerSelection}`){
        computerScore++
    }else if (result === `You win! ${playerSelection} beats ${computerSelection}`){
        playerScore++
    }
}

function declareWinner (computerScore,playerScore){
    if (computerScore>playerScore){
        return(`The computer wins with a score of ${computerScore}:${playerScore}`)
    }else if (playerScore>computerScore){
        return(`You win with a score of ${playerScore}:${computerScore}`)
    }else {
        return(`It's a tie`)
    }
}


let computerScore = 0
let playerScore = 0
let result

buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        if (computerScore<5 && playerScore<5){

            //get computer choice and player choice
            const computerSelection=getComputerChoice(choices).toUpperCase()
            const playerSelection = button.textContent.toUpperCase()
            //get winner of round and display on DOM
            result= playRound(computerSelection,playerSelection)
            results.textContent=result
            //update scores and display on DOM
            updateScore(result,computerSelection,playerSelection)
            runningScore.textContent = `Computer: ${computerScore}:Player: ${playerScore}`

        }else{
            instructions.textContent = declareWinner(computerScore,playerScore)
        }
    })
})